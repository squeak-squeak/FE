import { useNavigate } from 'react-router-dom';
import styles from '@/Styles/start.module.css';

const Start = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <img src="/cheese.png" alt="로고" className={styles.cheeseImage} />
          <span>누구를 찍어볼까?</span>
        </div>
        <div className={styles.headerBottom}>
          <strong className={styles.highlightText} onClick={handleNavigate}>
            찍찍
          </strong>
          , 지금 시작해요!
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/hamster.png" alt="햄스터" className={styles.hamsterImage} />
      </div>
      <div className={styles.loginButtons}>
        <img
          src="/kakao-button.png"
          alt="카카오 로그인"
          className={styles.loginButton}
        />
        <img
          src="/naver-button.png"
          alt="네이버 로그인"
          className={styles.loginButton}
        />
        <img
          src="/google-button.png"
          alt="Google 로그인"
          className={styles.loginButton}
        />
      </div>
    </>
  );
};

export default Start;
