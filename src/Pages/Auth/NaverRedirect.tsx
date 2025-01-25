import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverRedirect = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [needsSignup, setNeedsSignup] = useState(false);

  useEffect(() => {
    setIsChecking(true);

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let state = urlParams.get('state');
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
        const apiUrl = isSignupFlow ? '/api/join' : '/api/login';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code,
            state,
            phoneNumber: isSignupFlow ? phoneNumber : undefined,
            socialType: 'NAVER'
          })
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('jwt_token', data.accessToken);

          console.log('로그인 성공, 마이페이지로 이동');

          // 상태 업데이트 후 네비게이션 실행
          setTimeout(() => {
            navigate('/mypage', { replace: true });
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
  }, [navigate]);

  if (isChecking) {
    return <div>로그인 처리 중...</div>;
  }

  {
    error && <p style={{ color: 'red' }}>{error}</p>;
  }

  const handleSignupRedirect = () => {
    const newState = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('naver_state', newState);

    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const SIGNUP_REDIRECT_URI = import.meta.env.VITE_NAVER_SIGNUP_REDIRECT_URI;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${newState}&redirect_uri=${SIGNUP_REDIRECT_URI}`;

    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div>
      {needsSignup ? (
        <>
          <h2>전화번호 입력</h2>
          <input
            type="text"
            placeholder="전화번호 입력"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSignupRedirect}>가입하기</button>
        </>
      ) : (
        <div>로그인 처리 중...</div>
      )}
    </div>
  );
};

export default NaverRedirect;
