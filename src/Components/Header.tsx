import styles from '@/Styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="/cheese.png" alt="로고" className={styles.headerLogo} />
        <span className={styles.headerTitle}>찍찍</span>
      </div>
      <div className={styles.headerRight}>
        <img src="/invite.png" alt="초대코드" className={styles.headerIcon} />
        <img src="/bell.png" alt="알림" className={styles.headerIcon} />
      </div>
    </header>
  );
};

export default Header;
