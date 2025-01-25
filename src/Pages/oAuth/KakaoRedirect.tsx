import { useLocation } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';

function KakaoRedirect() {
  const { search: code } = useLocation();
  const [number, setNumber] = useState('');
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };

  console.log(code.slice(6));

  const submit = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number })
    });
  };

  return (
    <div css={containerStyle}>
      전화번호
      <input type="number" onChange={(e) => handleNumber(e)} />
      <div>{code.slice(6)}</div>
      <div>{number}</div>
      <button onClick={submit}>로그인 완료하기</button>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

export default KakaoRedirect;
