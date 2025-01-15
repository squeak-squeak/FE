import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/Style/theme';
import CheeseIcon from '@/assets/svg/cheese.svg';
import HamsterIcon from '@/assets/svg/hamster.svg';
import KakaoIcon from '@/assets/svg/kakao-button.svg';
import NaverIcon from '@/assets/svg/naver-button.svg';
import GoogleIcon from '@/assets/svg/google-button.svg';

const Start = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
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
        <KakaoIcon css={loginButtonStyle} />
        <NaverIcon css={loginButtonStyle} />
        <GoogleIcon css={loginButtonStyle} />
      </div>
    </>
  );
};

export default Start;
