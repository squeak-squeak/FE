/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();

  const bottomNavStyle = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    background-color: #FFEFB8;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 375px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  `;

  const navButtonStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover .navLabel {
      color: #ff7f48;
    }
  `;

  const navIconStyle = css`
    width: 24px;
    height: 24px;
  `;

  const navLabelStyle = css`
    font-size: 12px;
    color: black;
    font-weight: bold;
  `;

  return (
    <nav css={bottomNavStyle}>
      <button css={navButtonStyle} onClick={() => navigate('/grouplist')}>
        <img src="/cheese.png" alt="그룹" css={navIconStyle} />
        <span className="navLabel" css={navLabelStyle}>그룹</span>
      </button>
      <button css={navButtonStyle} onClick={() => navigate('/home')}>
        <img src="/cheese.png" alt="홈" css={navIconStyle} />
        <span className="navLabel" css={navLabelStyle}>홈</span>
      </button>
      <button css={navButtonStyle} onClick={() => navigate('/mypage')}>
        <img src="/cheese.png" alt="마이페이지" css={navIconStyle} />
        <span className="navLabel" css={navLabelStyle}>마이페이지</span>
      </button>
    </nav>
  );
};

export default BottomNav;
