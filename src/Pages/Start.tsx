/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/Components/Layout';

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
    color: #FFCB10;
    cursor: pointer;
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
    gap: 20px;
    width: 100%;
    align-items: center;
    margin-top: 20%;

    @media (max-width: 768px) {
      gap: 10px;
    }
  `;

  const loginButtonStyle = css`
    width: 60%;
    max-width: 300px; /* 버튼 최대 크기 */
    cursor: pointer;

    @media (max-width: 768px) {
      width: 80%; /* 태블릿 및 모바일 화면 */
    }
  `;

  return (
    <Layout>
      <div css={headerStyle}>
        <div css={headerTopStyle}>
          <img src="/cheese.png" alt="로고" css={cheeseImageStyle} />
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
        <img src="/hamster.png" alt="햄스터" css={hamsterImageStyle} />
      </div>
      <div css={loginButtonsStyle}>
        <img
          src="/kakao-button.png"
          alt="카카오 로그인"
          css={loginButtonStyle}
        />
        <img
          src="/naver-button.png"
          alt="네이버 로그인"
          css={loginButtonStyle}
        />
        <img
          src="/google-button.png"
          alt="Google 로그인"
          css={loginButtonStyle}
        />
      </div>
    </Layout>
  );
};

export default Start;
