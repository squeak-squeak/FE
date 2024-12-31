import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  border: 3px solid black;
  border-radius: 20px;
  overflow-y: auto;
  position: relative;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: black;
`;

const titleStyle = css`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;
`;

const subtitleStyle = css`
  text-align: center;
  font-size: 18px;
  color: #aeaeae;
  margin-bottom: 10px;
`;

const podiumStyle = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 40px;
  margin: 20px 0 50px;
`;

const rankStyle = (height: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80px;
  height: ${height}px;
  background-color: #d9d9d9;
  border-radius: 10px;
  position: relative;

  .rank {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: black;
  }

  .votes {
    margin-top: auto;
    font-size: 12px;
    color: black;
    padding-bottom: 10px;
  }
`;

const profileWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }

  .crown {
    position: absolute;
    font-size: 20px;
  }

  .name {
    margin-top: 5px;
    font-size: 14px;
    color: black;
  }
`;

const othersContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
`;

const otherItemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 8px;
  font-size: 14px;
  color: black;
`;

const VoteResult = () => {
  const navigate = useNavigate();

  const groupName = '그룹A';
  const question = '질문질문질문질문질문?';

  const topResults = [
    { name: '구성원5', votes: 6 },
    { name: '구성원4', votes: 5 },
    { name: '구성원1', votes: 2 }
  ];

  const others = [
    { name: '김아무개', votes: 1 },
    { name: '박아무개', votes: 1 },
    { name: '이아무개', votes: 1 },
    { name: '김아무개', votes: 1 },
    { name: '박아무개', votes: 1 },
    { name: '이아무개', votes: 1 },
    { name: '김아무개', votes: 1 },
    { name: '박아무개', votes: 1 },
    { name: '이아무개', votes: 1 }
  ];

  return (
    <div css={containerStyle}>
      <div css={closeButtonStyle} onClick={() => navigate(-1)}>
        ✕
      </div>

      <div>
        <div css={subtitleStyle}>{groupName}</div>
        <div css={titleStyle}>{question}</div>
      </div>

      <div css={podiumStyle}>
        <div>
          <div css={profileWrapperStyle}>
            <img src="/profile.png" alt="profile" />
            <span className="name">{topResults[1].name}</span>
          </div>
          <div css={rankStyle(280)}>
            <span className="rank">2nd</span>
            <div className="votes">{topResults[1].votes}표</div>
          </div>
        </div>

        <div>
          <div css={profileWrapperStyle}>
            <div className="crown">👑</div>
            <img src="/profile.png" alt="profile" />
            <span className="name">{topResults[0].name}</span>
          </div>
          <div css={rankStyle(320)}>
            <span className="rank">1sttttttttttttttt</span>
            <div className="votes">{topResults[0].votes}표</div>
          </div>
        </div>

        <div>
          <div css={profileWrapperStyle}>
            <img src="/profile.png" alt="profile" />
            <span className="name">{topResults[2].name}</span>
          </div>
          <div css={rankStyle(250)}>
            <span className="rank">3rd</span>
            <div className="votes">{topResults[2].votes}표</div>
          </div>
        </div>
      </div>

      <div css={othersContainerStyle}>
        {others.map((other, index) => (
          <div key={index} css={otherItemStyle}>
            <span>{other.name}</span>
            <span>{other.votes}표</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteResult;
