import BackHead from '@/Components/Common/BackHead';
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { theme } from '@/Style/theme';

function NewGroup() {
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState('파일 선택하기');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [desc, setDesc] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFileName(fileName ? fileName : '파일을 선택하세요');
      setThumbnail(thumbnail ? thumbnail : undefined);
    }
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  return (
    <div>
      <BackHead title="그룹 만들기" />

      <div css={groupContainer}>
        <div css={contentBoxStyle}>
          <div css={labelStyle}>그룹명</div>
          <input css={fieldStyle} placeholder="그룹명을 입력해주세요" />
        </div>

        <div css={{ ...contentBoxStyle, color: 'red' }}>
          <div css={labelStyle}>그룹 대표 이미지</div>
          <input
            css={{ display: 'none' }}
            onChange={handleFileChange}
            type="file"
            ref={fileInputRef}
            accept="image/*"
          />
          <button
            css={[
              fileInputButtonStyle,
              fileName === '파일 선택하기' && {
                color: '#C2C2C2',
                fontSize: '20px'
              }
            ]}
            onClick={handleButtonClick}>
            {fileName}
          </button>

          <img
            css={thumbnailPreviewStyle}
            src={thumbnail}
            onError={(e) => (e.currentTarget.style.display = 'none')} // 엑박 없애기
          />
        </div>

        <div css={contentBoxStyle}>
          <div css={labelStyle}>그룹 설명</div>
          <textarea
            css={textareaStyle}
            placeholder="그룹을 간략하게 설명해주세요"
            value={desc}
            onChange={handleDesc}
          />
        </div>

        <button css={GenerateButtonStyle}>그룹 생성하기</button>
      </div>
    </div>
  );
}

const groupContainer = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 10px;
`;

const contentBoxStyle = css`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const labelStyle = css`
  font-weight: bold;
  font-size: 25px;
`;

const fileInputButtonStyle = css`
  background-color: #f2f2f1;
  border: none;
  border-radius: 10px;
  height: 60px;
  cursor: pointer;
  font-size: 20px;
`;

const fieldStyle = css`
  font-size: 20px;
  background-color: #f2f2f1;
  border: none;
  padding: 16px;
  border-radius: 10px;
  ::placeholder {
    color: #c2c2c2;
  }
`;

const thumbnailPreviewStyle = css`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #d9d9d9;
  object-fit: cover;
`;

const textareaStyle = css`
  background-color: #f2f2f1;
  border: none;
  resize: none;
  padding: 15px;
  border-radius: 10px;
  height: 100px;
  border: none;
  &::placeholder {
    color: #c2c2c2;
  }
`;

const GenerateButtonStyle = css`
  background-color: ${theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 14px 0;
  font-size: 24px;
  font-weight: bold;
`;

export default NewGroup;
