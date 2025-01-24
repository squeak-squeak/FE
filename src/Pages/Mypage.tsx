import React from 'react';
import { theme } from '@/Style/theme';
import { css } from '@emotion/react';
import { Settings, PencilLine } from 'lucide-react';
import GroupIcon from '@/assets/svg/Group.svg';
import VoteIcon from '@/assets/svg/Vote.svg';
import { useAuth } from '@/Auth/AuthContext';

interface ContentCardProps {
  title: string;
  value: number;
  Icon: React.ReactNode;
}

function ContentCard({ item }: { item: ContentCardProps }) {
  const { title, value, Icon } = item;

  return (
    <div css={contentCardContainerStyle}>
      <div css={cardHeadStyle}>
        <div css={contentTitleStyle}>{title}</div>

        {Icon}
      </div>

      <div css={contentValueBoxStyle}>
        <span css={valueStyle}>{value}</span>
        <span css={unitStyle}>개</span>
      </div>
    </div>
  );
}

function Mypage() {
  const { user, isLoggedIn, logout } = useAuth();

  // 로그인하지 않은 사용자는 리다이렉트
  if (!isLoggedIn) {
    window.location.href = '/';
    return null;
  }

  return (
    <div css={containerStyle}>
      <div css={userInfoContainerStyle}>
        <div
          css={{
            width: '100px',
            height: '100px',
            borderRadius: '100%',
            backgroundColor: '#d9d9d9',
            position: 'relative'
          }}>
          <Settings
            css={{ position: 'absolute', right: '-10px', bottom: '0' }}
          />
        </div>

        <div css={userInfoBoxStyle}>
          <div css={id}>아이디 : {user?.email || 'N/A'}</div>
          <div css={nickName}>
            닉네임
            <div css={inputContainer}>
              <input css={inputStyle} value={user?.nickname || ''} readOnly />
              <PencilLine
                css={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div css={contentContainerStyle}>
        <ContentCard
          item={{
            title: '그룹 수',
            value: 7, // 실제 값이 있다면 API에서 가져올 것
            Icon: <GroupIcon width={30} />
          }}
        />
        <ContentCard
          item={{
            title: '받은 투표',
            value: 3, // 실제 값이 있다면 API에서 가져올 것
            Icon: <VoteIcon width={30} />
          }}
        />
      </div>

      <button css={buttonStyle} onClick={logout}>
        로그아웃
      </button>
    </div>
  );
}

const contentCardContainerStyle = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
  border-radius: 20px;
  padding: 20px;
  gap: 60px;
`;

const cardHeadStyle = css`
  display: flex;
  justify-content: space-between;
`;

const contentTitleStyle = css`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
`;

const contentValueBoxStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;

const valueStyle = css`
  font-size: 50px;
  font-weight: 600;
`;

const unitStyle = css`
  font-size: 40px;
  font-weight: 500;
`;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const userInfoContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const userInfoBoxStyle = css`
  background-color: #f2f2f1;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const id = css`
  font-size: 16px;
  font-weight: bold;
`;

const nickName = css`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const inputContainer = css`
  display: flex;
  position: relative;
`;

const inputStyle = css`
  border-radius: 10px;
  border: 1px solid #dadada;
  padding: 6px;
`;

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const buttonStyle = css`
  border: none;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  background-color: ${theme.colors.yellow};
  color: white;
  cursor: pointer;
`;

export default Mypage;
