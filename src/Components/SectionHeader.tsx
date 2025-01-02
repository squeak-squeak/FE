import { css } from '@emotion/react';
import { theme } from '@/Style/theme';

const headerStyle = css`
  font-size: 18px;
  margin: 10px 0 5px;
  color: black;

  strong {
    color: ${theme.colors.yellow};
  }
`;

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => (
  <div css={headerStyle}>{children}</div>
);

export default SectionHeader;
