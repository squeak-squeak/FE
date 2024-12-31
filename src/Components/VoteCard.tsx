import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

interface VoteCardProps {
  groupImage: string;
  groupName: string;
  question: string;
  peopleCount?: string;
  isCompleted?: boolean; // 투표 완료 여부
  isClosed?: boolean; // 마감된 투표 여부
}

const cardStyle = css`
  width: 200px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const groupImageStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const groupNameStyle = css`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const peopleCountStyle = css`
  font-size: 12px;
  color: #666;
  margin-right: 5px;
`;

const questionStyle = css`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const buttonStyle = (disabled: boolean) => css`
  margin-top: 15px;
  padding: 10px;
  border-radius: 20px;
  width: 120px;
  background-color: ${disabled ? 'white' : '#FFCB10'};
  border: 2px solid ${disabled ? '#D9D9D9' : 'white'};
  color: ${disabled ? '#A0A0A0' : 'white'};
  font-weight: bold;
  text-align: center;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
`;

const VoteCard = ({
  groupImage,
  groupName,
  question,
  peopleCount,
  isCompleted = false,
  isClosed = false
}: VoteCardProps) => {
  const navigate = useNavigate();

  let buttonLabel = '투표 하기';
  let isDisabled = false;

  const handleButtonClick = () => {
    if (isClosed) {
      navigate('/voteresult'); // 투표 결과 페이지로 이동
    }
  };

  if (isCompleted) {
    buttonLabel = '투표 완료';
    isDisabled = true;
  }

  if (isClosed) {
    buttonLabel = '결과 보기';
  }

  return (
    <div css={cardStyle}>
      <div css={headerStyle}>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <img src={groupImage} alt="그룹 이미지" css={groupImageStyle} />
          <span css={groupNameStyle}>{groupName}</span>
        </div>
        {peopleCount && <span css={peopleCountStyle}>{peopleCount}</span>}
      </div>
      <div css={questionStyle}>{question}</div>
      <div
        css={buttonStyle(isDisabled)}
        onClick={!isDisabled ? handleButtonClick : undefined}>
        {buttonLabel}
      </div>
    </div>
  );
};

export default VoteCard;
