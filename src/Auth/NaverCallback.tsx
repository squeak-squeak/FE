import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const storedState = localStorage.getItem('naver_state');

    if (!code || !state || state !== storedState) {
      console.error('잘못된 인증 요청입니다.');
      navigate('/');
      return;
    }

    const handleAuth = async () => {
      try {
        // 먼저 회원 존재 여부 확인
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            code,
            state,
            socialType: 'NAVER'
          })
        });

        const data = await response.json();

        if (response.ok && data.response) {
          // 이미 가입된 사용자, 로그인 진행
          localStorage.setItem('jwt_token', data.response.accessToken);
          navigate('/mypage');
        } else {
          // 회원가입이 필요하면 전화번호 입력 페이지로 이동
          console.log('회원가입이 필요합니다. 전화번호 입력 페이지로 이동');
          navigate(`/join?code=${code}&state=${state}`);
        }
      } catch (error) {
        console.error('인증 처리 중 오류 발생:', error);
        navigate('/');
      }
    };

    handleAuth();
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};

export default NaverCallback;
