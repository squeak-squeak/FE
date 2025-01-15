import { css } from '@emotion/react';
import Header from '@/Components/Common/Header';
import BottomNav from '@/Components/Common/BottomNav';
import { useLocation } from 'react-router-dom';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/layoutConstants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const loc = useLocation();
  const isHome = loc.pathname === '/home';

  // header가 나오지 않는 경로는 배열에 추가
  const isHeaderVisible = ['/', '/vote', '/notification'].includes(
    loc.pathname
  );

  // BottomNav가 보이지 않는 경로 설정
  const isBottomNavVisible = !['/', '/vote', '/notification'].includes(
    loc.pathname
  );

  const containerStyle = css`
    width: 100%;
    max-width: 375px;
    min-height: 100svh;
    margin: 0 auto;
    border-left: 3px solid #efefef;
    border-right: 3px solid #efefef;
    display: flex;
    flex-direction: column;
    padding-bottom: ${isBottomNavVisible ? `${NAV_HEIGHT}px` : '0'};
  `;

  const contentStyle = css`
    height: calc(
      100svh -
        (${HEADER_HEIGHT}px + ${isBottomNavVisible ? `${NAV_HEIGHT}px` : '0px'})
    );
    background-color: ${isHome ? '#FFEFB8' : 'white'};
    padding: 0 10px;
  `;

  return (
    <div css={containerStyle}>
      {!isHeaderVisible && <Header />}
      <div css={contentStyle}>{children}</div>
      {isBottomNavVisible && <BottomNav />}
    </div>
  );
};

export default Layout;
