import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/Components/Layout';
import Header from '@/Components/Header';
import BottomNav from '@/Components/BottomNav';

interface GroupCardProps {
  groupImage: string;
  groupName: string;
  isOwner: boolean; // 방장 여부
  onClick: () => void; // 클릭 핸들러
}

const pageWrapperStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const contentWrapperStyle = css`
  flex: 1;
  overflow-y: auto;
  padding: 0 0 80px;
  margin-top: -10px;
`;

const searchContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  gap: 10px;
`;

const searchBarStyle = css`
  display: flex;
  align-items: center;
  border: 3px solid black;
  border-radius: 50px;
  padding: 8px 10px;
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

const dropdownStyle = css`
  display: flex;
  justify-content: flex-end;
  select {
    width: 150px;
    padding: 8px;
    border: 2px solid #d9d9d9;
    border-radius: 20px;
    font-size: 14px;
  }
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 10px 20px;
`;

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

const addButtonStyle = css`
  position: absolute;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #ffcb10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
`;

const GroupCard = ({ groupImage, groupName, onClick }: GroupCardProps) => (
  <div css={groupCardStyle} onClick={onClick}>
    <img src={groupImage} alt={groupName} />
    <span>{groupName}</span>
  </div>
);

const GroupList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    { groupImage: '/group.png', groupName: '그룹명1', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명2', isOwner: false },
    { groupImage: '/group.png', groupName: '그룹명3', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명4', isOwner: false },
    { groupImage: '/group.png', groupName: '그룹명5', isOwner: false },
    { groupImage: '/group.png', groupName: '그룹명6', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명7', isOwner: false },
    { groupImage: '/group.png', groupName: '그룹명8', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명9', isOwner: false },
    { groupImage: '/group.png', groupName: '그룹명10', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명11', isOwner: true },
    { groupImage: '/group.png', groupName: '그룹명12', isOwner: true }
  ];

  const filteredGroups = groups.filter((group) => {
    const matchesFilter = filter === 'all' || group.isOwner;
    const matchesSearch = group.groupName.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      <div css={pageWrapperStyle}>
        <Header />

        <div css={contentWrapperStyle}>
          <h2 css={{ textAlign: 'center', margin: '10px 0', color: 'black' }}>
            그룹 리스트
          </h2>

          <div css={searchContainerStyle}>
            <div css={searchBarStyle}>
              <input
                type="text"
                placeholder="그룹명을 검색하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // 검색어 변경
              />
              <button>🔍</button>
            </div>

            <div css={dropdownStyle}>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)} // 드롭다운 값 변경
              >
                <option value="all">전체</option>
                <option value="owner">내가 방장인 그룹</option>
              </select>
            </div>
          </div>

          <div css={gridStyle}>
            {filteredGroups.map((group) => (
              <GroupCard
                key={group.groupName}
                groupImage={group.groupImage}
                groupName={group.groupName}
                isOwner={group.isOwner}
                onClick={() => navigate('/groupdetail')}
              />
            ))}
          </div>
        </div>

        <div css={addButtonStyle}>+</div>

        <BottomNav />
      </div>
    </Layout>
  );
};

export default GroupList;
