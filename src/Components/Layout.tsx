/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface LayoutProps {
  children: React.ReactNode;
  isHome?: boolean; // Home 페이지인지 확인
}

const Layout = ({ children, isHome = false }: LayoutProps) => {
  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html,
    body {
      height: 100%;
      background-color: white;
      overflow-x: hidden;
    }
  `;

  const containerStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-color: ${isHome ? '#FFEFB8' : 'white'};
    border-left: 3px solid #EFEFEF;
    border-right: 3px solid #EFEFEF;
  `;


  const contentStyle = css`
    width: 100%;
    max-width: 375px;
    flex: 1;
  `;

  return (
    <div css={globalStyle}>
      <div css={containerStyle}>
        <div css={contentStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
