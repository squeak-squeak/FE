import { css } from '@emotion/react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackHeadProps {
  title: string;
}

function BackHead({ title }: BackHeadProps) {
  const navigation = useNavigate();

  const navBack = () => {
    navigation(-1);
  };
  return (
    <div css={backNavBox}>
      <ChevronLeft size="25px" css={{ cursor: 'pointer' }} onClick={navBack} />
      <h1 css={titleStyle}>{title}</h1>
    </div>
  );
}

const backNavBox = css`
  display: flex;
  align-items: center;
  margin-top: 32px;
  position: relative;
  margin-bottom: 42px;
  font-weight: bold;
`;

const titleStyle = css`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
`;

export default BackHead;
