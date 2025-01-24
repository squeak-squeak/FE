const NaverLogin = () => {
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const STATE = Math.random().toString(36).substring(2, 15); // CSRF 방지용 state 생성

  const handleLogin = () => {
    console.log('네이버 로그인 버튼 클릭됨');

    localStorage.setItem('naver_state', STATE);
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = NAVER_AUTH_URL;
  };

  return { handleLogin };
};

export default NaverLogin;
