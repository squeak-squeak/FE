/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // 글로벌 스타일
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: white;
  `;

  const appWrapperStyle = css`
    width: 100%;
    max-width: 767px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    overflow-y: auto;
  `;

  return (
    <div css={[globalStyle, containerStyle]}>
      <div css={appWrapperStyle}>{children}</div>
    </div>
  );
};

export default Layout;
