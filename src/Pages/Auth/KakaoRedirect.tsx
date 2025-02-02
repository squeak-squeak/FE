import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import PhoneNumberForm from '@/Components/PhoneNumberForm';
import { useAuth } from '../Context/AuthContext';

function KakaoRedirect() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [needsSignup, setNeedsSignup] = useState(false);
  const { search: code } = useLocation();

  useEffect(() => {
    setIsChecking(true);

    if (!code) {
      setError('잘못된 인증 요청입니다.');
      navigate('/', { replace: true });
      setIsChecking(false);
      return;
    }

    const checkUser = async () => {
      try {
        const res = await fetch('http://localhost:8080/member/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: code.slice(6),
            socialType: 'KAKAO'
          })
        });
        if (res.ok) {
          const data = await res.json();
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
      } catch (error) {
        setError('로그인 처리 중 오류가 발생했습니다.');
      } finally {
        setIsChecking(false);
      }
    };
    checkUser();
  }, []);

  const onSubmit = async (phoneNumber: string) => {
    const res = await fetch('http://localhost:8080/api/member/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: code.slice(6),
        socialType: 'KAKAO',
        phoneNumber
      })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('jwt_token', data.response.accessToken);
      navigate('/home', { replace: true });
    }
  };

  if (isChecking) {
    return (
      <div css={loadingContainerStyle}>
        <div css={spinnerStyle}></div>
      </div>
    );
  }

  return (
    <div css={containerStyle}>
      {needsSignup ? (
        <PhoneNumberForm onSubmit={onSubmit} error={error} />
      ) : null}
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

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

export default KakaoRedirect;
