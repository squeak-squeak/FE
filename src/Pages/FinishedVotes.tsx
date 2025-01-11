import { css } from '@emotion/react';
import BackHead from '@/Components/Common/BackHead';
import { useState } from 'react';
import { theme } from '@/Style/theme';

interface VoteCardProps {
  title: string;
}

const dummy = [
  { title: '질문질문질문', active: true, isVote: true },
  { title: '질문질문질문', active: false, isVote: false },
  { title: '질문질문질문', active: true, isVote: true },
  { title: '질문질문질문', active: false, isVote: false }
];

function VoteCard({ item }: { item: VoteCardProps }) {
  const { title } = item;

  return (
    <div css={voteCardBoxStyle}>
      <div css={voteTitle}>{title}</div>
      <button css={buttonStyle}>결과보기</button>
    </div>
  );
}

const voteCardBoxStyle = css`
  border: 2px solid #efefef;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const voteTitle = css`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
`;

const buttonStyle = css`
  border: none;
  border-radius: 50px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  background-color: ${theme.colors.yellow};
  color: white;
  cursor: pointer;
`;

function FinishedVotes() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div css={containerStyle}>
      <BackHead title="완료된 투표" />
      <div css={searchBarStyle}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <div css={votesBoxStyle}>
        {dummy.map((item, idx) => (
          <VoteCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
`;

const searchBarStyle = css`
  display: flex;
  align-items: center;
  border: 3px solid black;
  border-radius: 50px;
  padding: 8px 10px;
  margin-bottom: 30px;
  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
  }
  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

const votesBoxStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export default FinishedVotes;
