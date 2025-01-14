import { theme } from '@/Style/theme';
import { css } from '@emotion/react';
import { Bell, MailPlus } from 'lucide-react';
import CheeseIcon from '@/assets/svg/cheese.svg';

const Header = () => {
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
        <a
          href="/home"
          css={css`
            display: flex;
            align-items: center;
            text-decoration: none;
            color: inherit;
          `}>
          <CheeseIcon css={headerLogoStyle} />
          <span css={headerTitleStyle}>찍찍</span>
        </a>
      </div>
      <div css={headerRightStyle}>
        <MailPlus css={headerIconStyle} />
        <Bell size={30} />
      </div>
    </header>
  );
};

export default Header;
