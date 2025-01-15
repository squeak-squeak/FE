import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/Components/Common/BottomNav';
import InvitationModal from '@/Components/InvitationModal';
import PendingModal from '@/Components/PendingModal';
import { theme } from '@/Style/theme';
import GroupProfileIcon from '@/assets/svg/GroupProfile.svg';
import StabbingIcon from '@/assets/svg/stabbing.svg';
import NoStabbingIcon from '@/assets/svg/no_stabbing.svg';
import { PencilLine } from 'lucide-react';

const pageWrapperStyle = css`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  height: calc(100vh - 70px);
  font-weight: bold;
`;

const contentWrapperStyle = css`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const bannerStyle = css`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #f2f2f1;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: black;
`;

const editableIconStyle = css`
  cursor: pointer;
  font-size: 18px;
`;

const sectionStyle = css`
  margin-bottom: 20px;
`;

const titleStyle = css`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

const memberListWrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

const memberStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
  span {
    font-size: 12px;
    text-align: center;
    color: black;
    margin-top: 5px;
  }
`;

const badgeStyle = css`
  background-color: ${theme.colors.yellow};
  color: white;
  font-size: 12px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 5px;
  cursor: pointer;
`;

const paginationStyle = css`
  text-align: center;
  font-size: 14px;
  color: #7b7b7b;
  margin-top: 10px;

  button {
    border: none;
    background-color: transparent;
    padding: 5px;
    color: #7b7b7b;
  }
`;

const voteSectionStyle = css`
  margin-top: 30px;
`;

const voteCardStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: #f2f2f1;
  margin-bottom: 10px;
  color: black;
  font-size: 15px;
`;

const questionStyle = css`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const progressWrapperStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: black;
  margin-right: 5px;
`;

const imageStyle = css`
  width: 20px;
  height: 20px;
`;

const buttonStyle = (disabled: boolean) => css`
  width: 80px;
  padding: 10px;
  background-color: ${disabled ? 'white' : '#ffcb10'};
  border: none;
  border-radius: 50px;
  font-size: 12px;
  color: ${disabled ? '#DDDDDD' : 'white'};
  border: 2px solid ${disabled ? '#D9D9D9' : '#ffcb10'};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
`;

const plusButtonWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const plusButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #c2c2c2;
  cursor: pointer;
  font-size: 16px;
`;

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const GroupDetail = () => {
  const navigate = useNavigate();
  const [isOwner] = useState(true); // 방장 여부
  const [pendingCount] = useState(3); // 초대 대기 인원 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [isModalOpen, setIsModalOpen] = useState(false); // 초대 모달 상태
  const [isPendingModalOpen, setIsPendingModalOpen] = useState(false); // 승인 대기 모달 상태

  const members = Array(26).fill({
    name: '구성원',
    image: <GroupProfileIcon width={40} height={40} />
  });
  const membersPerPage = 9;
  const totalPages = Math.ceil(members.length / membersPerPage);

  const ongoingVotes = [
    {
      question: '진행 중인 투표 질문입니다.',
      progress: '3/8',
      stabbing: false,
      completed: false
    },
    {
      question: '진행 중인 투표 질문입니다.',
      progress: '3/8',
      stabbing: true,
      completed: true
    },
    {
      question: '진행 중인 투표 질문입니다.',
      progress: '3/8',
      stabbing: false,
      completed: false
    }
  ];

  const completedVotes = Array(3).fill({ question: '완료된 투표 질문입니다.' });

  const pendingRequests = [
    '그룹 E의 김아무개가 가입 승인 요청을 보냈습니다.',
    '그룹 F의 이아무개가 가입 승인 요청을 보냈습니다.',
    '그룹 G의 박아무개가 가입 승인 요청을 보냈습니다.'
  ];

  const handleSwipe = (direction: number) => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + direction;
      if (nextPage < 1 || nextPage > totalPages) return prevPage;
      return nextPage;
    });
  };

  return (
    <div css={pageWrapperStyle}>
      <div css={contentWrapperStyle}>
        <div css={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <button
            css={{
              marginRight: 10,
              fontSize: '25px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: 'transparent'
            }}
            onClick={() => navigate(-1)}>
            &lt;
          </button>
          <h2
            css={{
              fontSize: '25px',
              color: 'black',
              flex: 1,
              display: 'flex',
              justifyContent: 'center'
            }}>
            그룹A
          </h2>
          {isOwner && (
            <span css={editableIconStyle}>
              <PencilLine />
            </span>
          )}
        </div>

        <div css={bannerStyle}>
          그룹 대표 이미지
          {isOwner && (
            <span
              css={{
                position: 'absolute',
                bottom: '5px',
                right: '10px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
              <PencilLine />
            </span>
          )}
        </div>

        <div css={sectionStyle}>
          <div css={titleStyle}>그룹 설명</div>
          <div
            css={{
              position: 'relative',
              borderRadius: 10,
              backgroundColor: '#F2F2F1',
              padding: '10px',
              marginBottom: '10px',
              height: 150
            }}>
            <p css={{ color: 'gray', margin: 0 }}>
              그룹을 간략하게 설명해주세요
            </p>
            {isOwner && (
              <span
                css={{
                  position: 'absolute',
                  bottom: '5px',
                  right: '10px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>
                <PencilLine />
              </span>
            )}
          </div>
        </div>

        <button
          css={{
            display: 'flex',
            marginBottom: 20,
            marginLeft: 'auto',
            padding: '10px 20px',
            backgroundColor: theme.colors.yellow,
            border: 'none',
            borderRadius: '15px',
            color: 'white'
          }}
          onClick={() => setIsModalOpen(true)}>
          그룹 초대하기
        </button>

        <div css={sectionStyle}>
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <span css={titleStyle}>그룹 구성원</span>
            {isOwner && pendingCount > 0 && (
              <div
                css={{ ...badgeStyle }}
                onClick={() => setIsPendingModalOpen(true)}>
                {pendingCount}
              </div>
            )}
          </div>
          <div css={memberListWrapperStyle}>
            {members
              .slice(
                (currentPage - 1) * membersPerPage,
                currentPage * membersPerPage
              )
              .map((member, index) => (
                <div key={index} css={memberStyle}>
                  {typeof member.image === 'string' ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    member.image
                  )}
                  <span>{`${member.name}${index + 1}`}</span>
                </div>
              ))}
          </div>

          <div css={paginationStyle}>
            <button
              css={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => handleSwipe(-1)}>
              &lt;
            </button>
            {currentPage}/{totalPages}
            <button
              css={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => handleSwipe(1)}>
              &gt;
            </button>
          </div>
        </div>

        <div css={voteSectionStyle}>
          <div css={titleStyle}>진행 중인 투표</div>
          {ongoingVotes.map((vote, index) => (
            <div key={index} css={voteCardStyle}>
              <span css={questionStyle}>{truncateText(vote.question, 12)}</span>
              <div css={progressWrapperStyle}>
                {vote.stabbing ? (
                  <StabbingIcon css={imageStyle} />
                ) : (
                  <NoStabbingIcon css={imageStyle} />
                )}
                <span>{vote.progress}</span>
              </div>
              <button css={buttonStyle(vote.completed)}>
                {vote.completed ? '투표 완료' : '투표 하기'}
              </button>
            </div>
          ))}
          <div css={plusButtonWrapperStyle}>
            <button css={plusButtonStyle}>더보기</button>
          </div>
        </div>

        <div css={voteSectionStyle}>
          <div css={titleStyle}>완료된 투표</div>
          {completedVotes.map((vote, index) => (
            <div key={index} css={voteCardStyle}>
              <span>{vote.question}</span>
              <button
                css={buttonStyle(false)}
                onClick={() => navigate('/vote-result')}>
                결과 보기
              </button>
            </div>
          ))}
          <div css={plusButtonWrapperStyle}>
            <button css={plusButtonStyle}>더보기</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal
          groupName="그룹A"
          inviteCode="초대코드초대코드"
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isPendingModalOpen && (
        <PendingModal
          onClose={() => setIsPendingModalOpen(false)}
          pendingRequests={pendingRequests}
        />
      )}
      <BottomNav />
    </div>
  );
};

export default GroupDetail;
