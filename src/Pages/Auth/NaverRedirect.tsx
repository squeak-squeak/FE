import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneNumberForm from '@/Components/PhoneNumberForm';
import { css } from '@emotion/react';
import { useAuth } from '@/Pages/Context/AuthContext';

const NaverRedirect = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [needsSignup, setNeedsSignup] = useState(false);

  useEffect(() => {
    setIsChecking(true);

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const storedState = localStorage.getItem('naver_state');

    if (!code || !state || state !== storedState) {
      setError('잘못된 인증 요청입니다.');
      navigate('/', { replace: true });
      setIsChecking(false);
      return;
    }

    const checkUser = async () => {
      try {
        const isSignupFlow =
          window.location.pathname.includes('signup-callback');
        const apiUrl = isSignupFlow ? '/api/member/join' : '/api/member/login';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code,
            state,
            socialType: 'NAVER'
          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log('백엔드 응답 데이터:', data);

          localStorage.setItem('jwt_token', data.response.accessToken);

          if (data.response.member) {
            login({
              id: data.response.member.id,
              email: data.response.member.email,
              nickname: data.response.member.nickname
            });
          } else if (data.response.memberId) {
            login({
              id: data.response.memberId,
              email: data.response.email || '',
              nickname: data.response.nickname || ''
            });
          } else {
            console.error('회원 정보가 응답에 없습니다.');
          }

          console.log('로그인 성공, 홈으로 이동');
          setTimeout(() => {
            navigate('/home', { replace: true });
          }, 100);
        } else {
          setNeedsSignup(true);
        }
      } catch (err) {
        setError('로그인 처리 중 오류가 발생했습니다.');
      } finally {
        setIsChecking(false);
      }
    };

    checkUser();
  }, [navigate, login]);

  const handleSignupRedirect = (phoneNumber: string) => {
    const newState = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('naver_state', newState);

    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const SIGNUP_REDIRECT_URI = import.meta.env.VITE_NAVER_SIGNUP_REDIRECT_URI;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${newState}&redirect_uri=${SIGNUP_REDIRECT_URI}&phoneNumber=${phoneNumber}`;

    window.location.href = NAVER_AUTH_URL;
  };

  if (isChecking) {
    return (
      <div css={loadingContainerStyle}>
        <div css={spinnerStyle}></div>
      </div>
    );
  }

  return (
    <div>
      {needsSignup ? (
        <PhoneNumberForm onSubmit={handleSignupRedirect} error={error} />
      ) : null}
    </div>
  );
};

const loadingContainerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const spinnerStyle = css`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #ffd43b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default NaverRedirect;
