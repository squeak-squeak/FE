import './start.css';

const Start = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <div className="header1">누구를 찍어볼까? 🐹</div>
                    <div className="header2">
                        <strong>찍찍</strong>, 지금 시작해요!
                    </div>
                </div>
                <div className="image-container">
                    <img
                        src="/hamster.png"
                        alt="hamster"
                        className="hamster-image"
                    />
                </div>
                <div className="login-buttons">
                    <button className="kakao-button">카카오 로그인</button>
                    <button className="naver-button">네이버 로그인</button>
                    <button className="google-button">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Start;
