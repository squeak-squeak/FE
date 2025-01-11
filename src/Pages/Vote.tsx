import { theme } from '@/Style/theme';
import { css } from '@emotion/react';

const dummey = [
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' },
  { name: 'asdf' }
];

function UserCard(item: { name: string }) {
  const { name } = item;
  return (
    <div css={userCardStyle}>
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#d9d9d9',
          borderRadius: '100%'
        }}
      />
      <div css={userName}>{name}</div>
    </div>
  );
}

function Vote() {
  return (
    <div css={containerStyle}>
      <div css={voteInfoBoxStyle}>
        <div css={groupNameStyle}>그룹A</div>
        <div css={voteAnswerStyle}>질문질문질문질문?</div>
      </div>

      <div css={userBoxStyle}>
        {dummey.map((item, idx) => (
          <UserCard key={idx} name={item.name} />
        ))}
      </div>

      <button css={buttonStyle}>투표 완료하기</button>
    </div>
  );
}

const containerStyle = css`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 81px 0 54px;
`;

const voteInfoBoxStyle = css`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const groupNameStyle = css`
  font-size: 25px;
  font-weight: bold;
  color: #aeaeae;
  margin-bottom: 4px;
`;

const voteAnswerStyle = css`
  font-size: 30px;
  font-weight: bold;
`;

const userBoxStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;

const userCardStyle = css`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  gap: 10px;
  border: 1px solid #efefef;
  border-radius: 20px;
`;

const userName = css`
  font-size: 20px;
  font-weight: bold;
`;

const buttonStyle = css`
  margin-bottom: 80px;
  padding: 14px 0;
  border-radius: 20px;
  background-color: ${theme.colors.yellow};
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export default Vote;
