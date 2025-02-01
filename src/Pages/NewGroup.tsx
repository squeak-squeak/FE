import BackHead from '@/Components/Common/BackHead';
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { theme } from '@/Style/theme';
import { useAuth } from '@/Pages/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function NewGroup() {
  const navigate = useNavigate();
  const { user } = useAuth(); // 로그인 시 저장된 user 객체 -> memberId
  const [groupName, setGroupName] = useState('');
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState('파일 선택하기');
  const [desc, setDesc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setFileName(fileName ? fileName : '파일 선택하기');
      setThumbnail(thumbnail ? thumbnail : undefined);
    }
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleCreateGroup = async () => {
    console.log('현재 로그인된 user:', user);
    // AuthContext에서 user 객체에 저장된 memberId를 가져옴
    const memberId = user?.id;
    if (!memberId) {
      setError('회원 정보가 없습니다.');
      return;
    }
    if (!groupName) {
      setError('그룹명을 입력해주세요.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('jwt_token') || '';
      const authHeader = token.startsWith('Bearer ')
        ? token
        : `Bearer ${token}`;

      const response = await fetch(
        `http://localhost:8080/api/groups/create?memberId=${memberId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader
          },
          body: JSON.stringify({
            name: groupName,
            image: thumbnail || '',
            description: desc
          })
        }
      );

      const data = await response.json();
      if (response.ok && data.success) {
        navigate('/group-list');
      } else {
        setError(data.error || '그룹 생성에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      setError('그룹 생성 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BackHead title="그룹 만들기" />

      <div css={groupContainer}>
        <div css={contentBoxStyle}>
          <div css={labelStyle}>그룹명</div>
          <input
            css={fieldStyle}
            placeholder="그룹명을 입력해주세요"
            value={groupName}
            onChange={handleGroupNameChange}
          />
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

          {thumbnail ? (
            <img
              css={thumbnailPreviewStyle}
              src={thumbnail}
              alt="Thumbnail Preview"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          ) : (
            // 파일을 선택하지 않은 경우 기본 회색 동그라미를 표시
            <div css={thumbnailPreviewStyle}></div>
          )}
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

        {error && <div css={{ color: 'red' }}>{error}</div>}

        <button
          css={GenerateButtonStyle}
          onClick={handleCreateGroup}
          disabled={loading}>
          {loading ? '생성 중...' : '그룹 생성하기'}
        </button>
      </div>
    </div>
  );
}

const groupContainer = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
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
  margin-top: 10px;
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
