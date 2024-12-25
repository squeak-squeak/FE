/** @jsxImportSource @emotion/react */
import Header from '@/Components/Header';
import { css } from '@emotion/react';

const test = css`
  color: red;
`;

export default function Notification() {
  return (
    <>
      <Header isShowInviteIcon={false} />
      <div css={test}>asdf</div>
    </>
  );
}
