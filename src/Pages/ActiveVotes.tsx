import { css } from '@emotion/react';
import BackHead from '@/Components/Common/BackHead';
import { useState } from 'react';
import { Pointer, PointerOff } from 'lucide-react';
import { theme } from '@/Style/theme';

interface VoteCardProps {
  title: string;
  active: boolean;
  isVote: boolean;
}

const dummy = [
  { title: '질문질문질문', active: true, isVote: true },
  { title: '질문질문질문', active: false, isVote: false },
  { title: '질문질문질문', active: true, isVote: true },
  { title: '질문질문질문', active: false, isVote: false }
];

function VoteCard({ item }: { item: VoteCardProps }) {
  const { title, active, isVote } = item;

  return (
    <div css={voteCardBoxStyle}>
      <div css={voteCardHeadStyle}>
        {isVote ? <PointerOff /> : <Pointer />}

        <div css={voterRatioStyle}>9/10</div>
      </div>
      <div css={voteTitle}>{title}</div>
      {active ? (
        <button css={enableButtonStyle}>투표하기</button>
      ) : (
        <button css={disableButtonStyle}>투표하기</button>
      )}
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

const voteCardHeadStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const voterRatioStyle = css`
  font-size: 10px;
  font-weight: bold;
`;

const voteTitle = css`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const enableButtonStyle = css`
  border: none;
  border-radius: 50px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  background-color: ${theme.colors.yellow};
  color: white;
`;

const disableButtonStyle = css`
  border: 2px solid #d9d9d9;
  border-radius: 50px;
  padding: 10px 0;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  color: #dddddd;
`;

function ActiveVotes() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div css={containerStyle}>
      <BackHead title="진행 중인 투표" />
      <div css={searchBarStyle}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 변경
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
  padding: 10px;
  height: calc(100svh - 140px);
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

// Todo: 검색어 input 구조 변경

export default ActiveVotes;
