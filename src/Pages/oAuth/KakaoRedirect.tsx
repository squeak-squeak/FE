import { useLocation } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';

function KakaoRedirect() {
  const { search } = useLocation();
  const code = search.slice(6);
  const [number, setNumber] = useState('');
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };
  const data = {
    code,
    phoneNumber: '01077075801',
    socialType: 'KAKAO',
    state: 'asdf'
  };
  const submit = () => {
    fetch('http://localhost:8080/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  console.log(code, number);

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
