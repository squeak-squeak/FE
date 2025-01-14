import { css } from '@emotion/react';
import VoteCard from '@/Components/VoteCard';
import SectionHeader from '@/Components/SectionHeader';
import { theme } from '@/Style/theme';

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
  margin-left: 75%;
`;

const whiteBoxStyle = css`
  background-color: white;
  border-radius: 20px;
  padding: 10px 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  font-weight: bold;
`;

const sliderStyle = css`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
  }
`;

const Home = () => {
  return (
    <>
      <div
        css={css`
          padding: 20px;
          margin-bottom: 20px;
        `}>
        <div css={greetingStyle}>000님, 안녕하세요!</div>
        <div css={bannerStyle}>
          <img src="/home.png" alt="홈 이미지" width="150px" />
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
          현재 진행 중인 투표 <strong>n개</strong>
        </SectionHeader>
        <div css={sliderStyle}>
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명A"
            question="질문질문질문"
            peopleCount="9/10"
            isCompleted={false}
          />
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명B"
            question="다른 질문"
            peopleCount="9/10"
            isCompleted={true}
          />
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명B"
            question="다른 질문"
            peopleCount="9/10"
            isCompleted={true}
          />
        </div>

        <SectionHeader>오늘 마감된 투표</SectionHeader>
        <div css={sliderStyle}>
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명A"
            question="지난 질문"
            isClosed={true}
          />
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명B"
            question="다른 지난 질문"
            isClosed={true}
          />
          <VoteCard
            groupImage="/group.png"
            groupName="그룹명B"
            question="다른 지난 질문"
            isClosed={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
