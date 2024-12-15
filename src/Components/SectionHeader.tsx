/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  font-size: 18px;
  margin: 10px 0 5px;
  color: black;

  strong {
    color: #FFD43B;
  }
`;

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => (
  <div css={headerStyle}>{children}</div>
);

export default SectionHeader;
