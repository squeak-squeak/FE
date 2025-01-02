import { css } from '@emotion/react';
import Header from '@/Components/Common/Header';
import BottomNav from '@/Components/Common/BottomNav';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const loc = useLocation();
  const isHome = loc.pathname === '/home' ? true : false;
  const isStart = loc.pathname === '/' ? true : false;

  const containerStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  `;

  const contentStyle = css`
    background-color: ${isHome ? '#FFEFB8' : 'white'};
    width: 100%;
    max-width: 375px;
    flex: 1;
    border-left: 3px solid #efefef;
    border-right: 3px solid #efefef;
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        {!isStart && <Header />}
        {children}
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
