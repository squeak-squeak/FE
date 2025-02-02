import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/Style/theme';
import CheeseIcon from '@/assets/svg/cheese.svg';
import HamsterIcon from '@/assets/svg/logo.svg';
import KakaoIcon from '@/assets/svg/kakao-button.svg';
import NaverIcon from '@/assets/svg/naver-button.svg';
import GoogleIcon from '@/assets/svg/google-button.svg';
import { useAuth } from '@/Pages/Context/AuthContext';

const Start = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      console.log('이미 로그인된 사용자, 홈으로 이동');
      navigate('/home', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleNavigate = () => {
    navigate('/home');
  };

  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const LOGIN_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URL = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const STATE = Math.random().toString(36).substring(2, 15); // CSRF 방지용 state 생성

  const handleLogin = () => {
    if (!NAVER_CLIENT_ID || !LOGIN_REDIRECT_URI) {
      console.error('네이버 로그인 환경 변수가 설정되지 않았습니다.');
      alert('네이버 로그인 설정이 올바르지 않습니다.');
      return;
    }

    console.log('네이버 로그인 버튼 클릭됨');

    localStorage.setItem('naver_state', STATE);
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${LOGIN_REDIRECT_URI}`;
    window.location.href = NAVER_AUTH_URL;
  };

  const handleKakaoLogin = () => {
    if (!KAKAO_CLIENT_ID || !KAKAO_REDIRECT_URL) {
      console.error('카카오 로그인 환경 변수가 설정되지 않았습니다.');
      alert('카카오 로그인 설정이 올바르지 않습니다.');
      return;
    }
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const handleGoogleLogin = () => {
    if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URL) {
      console.error('카카오 로그인 환경 변수가 설정되지 않았습니다.');
      alert('카카오 로그인 설정이 올바르지 않습니다.');
      return;
    }
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&response_type=code&scope=email+profile`;

    window.location.href = googleURL;
  };

  return (
    <>
      <div css={headerStyle}>
        <div css={headerTopStyle}>
          <CheeseIcon css={cheeseImageStyle} />
          <span>누구를 찍어볼까?</span>
        </div>
        <div css={headerBottomStyle}>
          <strong css={highlightTextStyle} onClick={handleNavigate}>
            찍찍
          </strong>
          , 지금 시작해요!
        </div>
      </div>
      <div css={imageContainerStyle}>
        <HamsterIcon css={hamsterImageStyle} />
      </div>
      <div css={loginButtonsStyle}>
        <KakaoIcon css={loginButtonStyle} onClick={handleKakaoLogin} />
        <NaverIcon css={loginButtonStyle} onClick={handleLogin} />
        <GoogleIcon css={loginButtonStyle} onClick={handleGoogleLogin} />
      </div>
    </>
  );
};

const headerStyle = css`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  font-weight: bold;
`;

const headerTopStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  color: black;
`;

const cheeseImageStyle = css`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const headerBottomStyle = css`
  font-size: 18px;
  color: black;
  margin-top: 8px;
`;

const highlightTextStyle = css`
  font-size: 40px;
  font-weight: bold;
  color: #ffcb10;
  cursor: pointer;
  ${theme.typo.Logo}
`;

const imageContainerStyle = css`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const hamsterImageStyle = css`
  width: 100%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
`;

const loginButtonsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  margin-top: 20%;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const loginButtonStyle = css`
  width: 60%;
  max-width: 300px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export default Start;
