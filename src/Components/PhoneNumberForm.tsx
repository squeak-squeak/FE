import { useState } from 'react';
import { css } from '@emotion/react';
import colors from '@/Style/color';

interface PhoneNumberFormProps {
  onSubmit: (phoneNumber: string) => void;
  error?: string | null;
}

const PhoneNumberForm = ({ onSubmit, error }: PhoneNumberFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length < 10 || !/^\d{10,11}$/.test(phoneNumber)) {
      alert('올바른 전화번호를 입력해주세요.');
      return;
    }
    onSubmit(phoneNumber);
  };

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>전화번호 입력</h2>
      <p css={subtitleStyle}>계속하려면 휴대폰 번호를 입력하세요.</p>
      <form onSubmit={handleSubmit} css={formStyle}>
        <input
          type="tel"
          placeholder="전화번호 (01012345678)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          css={inputStyle}
        />
        <button type="submit" css={buttonStyle}>
          가입하기
        </button>
      </form>
      {error && <p css={errorStyle}>{error}</p>}
    </div>
  );
};

const containerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  text-align: center;
  width: 100%;
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 30px 20px;
    max-width: 90%;
  }
`;

const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const subtitleStyle = css`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const inputStyle = css`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 16px;
  text-align: center;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.yellow};
    box-shadow: 0 0 8px rgba(255, 212, 59, 0.4);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const buttonStyle = css`
  padding: 14px 0;
  border-radius: 8px;
  border: none;
  background-color: ${colors.yellow};
  color: #333;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(${colors.yellow}, 10%);
  }
`;

const errorStyle = css`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
`;

export default PhoneNumberForm;
