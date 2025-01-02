import { css } from '@emotion/react';
import BackHead from '@/Components/Common/BackHead';
import { useState } from 'react';
import { theme } from '@/Style/theme';

const container = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const contentBox = css`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const contentLabel = css`
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const selectStyle = css`
  border: none;
  background-color: #f2f2f1;
  border-radius: 10px;
  padding: 16px 10px;
`;

const optionStyle = css``;

const textareaStyle = css`
  resize: none;
  background-color: #f2f2f1;
  padding: 15px;
  height: 200px;
  border: none;
  border-radius: 10px;
  ::placeholder {
    color: #c2c2c2;
    font-size: 20px;
  }
`;

const checkboxContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const checkboxButton = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c2c2c2;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const button = css`
  width: 100%;
  color: white;
  background-color: ${theme.colors.yellow};
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  padding: 14px 0;
  border-radius: 20px;
  cursor: pointer;
  font-size: 24px;
`;

export default function NewVote() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };
  console.log(isChecked);
  return (
    <>
      <div>
        <BackHead title="투표 만들기" />

        <div css={container}>
          <div css={contentBox}>
            <h6 css={contentLabel}>그룹 선택</h6>
            <select css={selectStyle} defaultValue={'플레이스홀더'}>
              <option disabled hidden>
                플레이스홀더
              </option>
              <option css={optionStyle}>asdf</option>
            </select>
          </div>

          <div css={contentBox}>
            <h6 css={contentLabel}>질문 작성</h6>
            <textarea
              css={textareaStyle}
              placeholder="그룹을 간략하게 설명해주세요"
            />
            <div css={checkboxContainer}>
              <button css={checkboxButton} onClick={handleChecked}>
                <input type="checkbox" checked={isChecked} readOnly />
                <span>익명 생성</span>
              </button>
            </div>
          </div>

          <button css={button}>투표 생성하기</button>
        </div>
      </div>
    </>
  );
}
