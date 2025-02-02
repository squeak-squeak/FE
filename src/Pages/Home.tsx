import { css } from '@emotion/react';
import VoteCard from '@/Components/VoteCard';
import SectionHeader from '@/Components/SectionHeader';
import { theme } from '@/Style/theme';
import GroupProfileIcon from '@/assets/svg/GroupProfile.svg';
import HomeIcon from '@/assets/svg/home.svg';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow-y: auto;
  background-color: #ffeeb8;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const greetingStyle = css`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
`;

const bannerStyle = css`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  font-weight: bold;
`;

const contentAndButtonStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
  color: black;

  strong {
    font-size: 17px;
    color: ${theme.colors.orange};
    font-weight: bold;
  }
`;

const plusButtonStyle = css`
  width: 40px;
  height: 40px;
  background-color: #ffcb10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-left: auto;
`;

const whiteBoxStyle = css`
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 375px;
  box-sizing: border-box;
  font-weight: bold;
`;

const sliderStyle = css`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const voteCardStyle = css`
  flex: 0 0 30%;
  max-width: 140px;
  min-width: 100px;

  @media (min-width: 768px) {
    flex: 0 0 40%;
    max-width: 180px;
  }

  @media (min-width: 1024px) {
    flex: 0 0 45%;
    max-width: 220px;
  }

  @media (min-width: 1280px) {
    flex: 0 0 50%;
    max-width: 250px;
  }
`;

const Home = () => {
  const renderVoteCards = (
    data: Array<{
      groupName: string;
      question: string;
      peopleCount?: string;
      isCompleted?: boolean;
      isClosed?: boolean;
    }>
  ) =>
    data.map((item, index) => (
      <VoteCard
        key={index}
        groupImage={<GroupProfileIcon />}
        groupName={item.groupName}
        question={item.question}
        peopleCount={item.peopleCount}
        isCompleted={item.isCompleted}
        isClosed={item.isClosed}
        css={voteCardStyle}
      />
    ));

  const ongoingVotes = [
    {
      groupName: '그룹명A',
      question: '질문질문질문',
      peopleCount: '9/10',
      isCompleted: false
    },
    {
      groupName: '그룹명B',
      question: '다른 질문',
      peopleCount: '9/10',
      isCompleted: true
    },
    {
      groupName: '그룹명B',
      question: '다른 질문',
      peopleCount: '9/10',
      isCompleted: true
    }
  ];

  const closedVotes = [
    { groupName: '그룹명A', question: '지난 질문', isClosed: true },
    { groupName: '그룹명B', question: '다른 지난 질문', isClosed: true },
    { groupName: '그룹명B', question: '다른 지난 질문', isClosed: true }
  ];

  return (
    <div css={containerStyle}>
      <div
        css={css`
          padding: 20px;
          margin-bottom: 20px;
        `}>
        <div css={greetingStyle}>000님, 안녕하세요!</div>
        <div css={bannerStyle}>
          <HomeIcon width={140} height={140} />
          <div css={contentAndButtonStyle}>
            <div css={contentStyle}>
              <p>누구를 찍어볼까?</p>
              <p>
                <strong>익명투표, </strong>지금 시작해요!
              </p>
            </div>
            <div css={plusButtonStyle}>+</div>
          </div>
        </div>
      </div>

      <div css={whiteBoxStyle}>
        <SectionHeader>
          현재 진행 중인 투표 <strong>{ongoingVotes.length}개</strong>
        </SectionHeader>
        <div css={sliderStyle}>{renderVoteCards(ongoingVotes)}</div>

        <SectionHeader>오늘 마감된 투표</SectionHeader>
        <div css={sliderStyle}>{renderVoteCards(closedVotes)}</div>
      </div>
    </div>
  );
};

export default Home;
