import './start.css';

const Start = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <div className="header-top">
            <span>누구를 찍어볼까?</span>
            <img src="/cheese.png" alt="cheese" className="cheese-image" />
          </div>
          <div className="header-bottom">
            <strong className="highlight-text">찍찍</strong>, 지금 시작해요!
          </div>
        </div>
        <div className="image-container">
          <img src="/hamster.png" alt="hamster" className="hamster-image" />
        </div>
        <div className="login-buttons">
          <img
            src="/kakao-button.png"
            alt="카카오 로그인"
            className="login-button"
          />
          <img
            src="/naver-button.png"
            alt="네이버 로그인"
            className="login-button"
          />
          <img
            src="/google-button.png"
            alt="Google 로그인"
            className="login-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
