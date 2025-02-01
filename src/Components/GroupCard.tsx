import React from 'react';
import { css } from '@emotion/react';

interface GroupCardProps {
  groupImage: React.ReactNode;
  groupName: string; // 방장 여부
  onClick: () => void; // 클릭 핸들러
}

const groupCardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: white;
  border: 2px solid #efefef;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #e0e0e0;
  }
  span {
    margin-top: 10px;
    color: black;
  }
`;

const GroupCard = ({ groupImage, groupName, onClick }: GroupCardProps) => {
  return (
    <div css={groupCardStyle} onClick={onClick}>
      {typeof groupImage === 'string' ? (
        <img src={groupImage} alt={groupName} />
      ) : (
        groupImage
      )}
      <span>{groupName}</span>
    </div>
  );
};

export default GroupCard;
