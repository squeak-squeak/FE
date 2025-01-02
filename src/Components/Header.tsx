import { theme } from '@/Style/theme';
import { css } from '@emotion/react';

const Header = ({ isShowInviteIcon = true }) => {
  const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
  `;

  const headerLeftStyle = css`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const headerTitleStyle = css`
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    color: black;
    ${theme.typo.Logo}
  `;

  const headerRightStyle = css`
    display: flex;
    gap: 20px;
  `;

  const headerLogoStyle = css`
    width: 40px;
    height: 40px;
    object-fit: contain;
  `;

  const headerIconStyle = css`
    width: 30px;
    height: 30px;
    object-fit: contain;
  `;

  return (
    <header css={headerStyle}>
      <div css={headerLeftStyle}>
        <img src="/cheese.png" alt="로고" css={headerLogoStyle} />
        <span css={headerTitleStyle}>찍찍</span>
      </div>
      <div css={headerRightStyle}>
        {isShowInviteIcon && (
          <img src="/invite.png" alt="초대코드" css={headerIconStyle} />
        )}
        <img src="/bell.png" alt="알림" css={headerIconStyle} />
      </div>
    </header>
  );
};

export default Header;
