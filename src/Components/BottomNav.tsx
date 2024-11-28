import styles from '@/Styles/bottomnav.module.css';

const BottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navButton}>
        <img src="/cheese.png" alt="그룹" className={styles.navIcon} />
        <span className={styles.navLabel}>그룹</span>
      </button>
      <button className={styles.navButton}>
        <img src="/cheese.png" alt="홈" className={styles.navIcon} />
        <span className={styles.navLabel}>홈</span>
      </button>
      <button className={styles.navButton}>
        <img src="/cheese.png" alt="마이페이지" className={styles.navIcon} />
        <span className={styles.navLabel}>마이페이지</span>
      </button>
    </nav>
  );
};

export default BottomNav;
