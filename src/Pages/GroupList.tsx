import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupProfileIcon from '@/assets/svg/GroupProfile.svg';
import { Search } from 'lucide-react';
import BackHead from '@/Components/Common/BackHead';
import GroupCard from '@/Components/GroupCard';

const GroupList = () => {
  const navigate = useNavigate();

  // 드롭다운 기본값은 "ALL", 검색어는 빈 문자열
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [groups, setGroups] = useState<any[]>([]);

  // filter와 searchTerm이 변경될 때마다 API 호출
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const token = localStorage.getItem('jwt_token') || '';
        const authHeader = token.startsWith('Bearer ')
          ? token
          : `Bearer ${token}`;

        // 검색어 앞뒤 공백 제거
        const keywordParam = searchTerm.trim();
        const queryParams = new URLSearchParams();
        queryParams.append('type', filter);
        queryParams.append('keyword', keywordParam);

        // Vite proxy rewrite 옵션 때문에 /api가 제거되므로
        // 호출 URL에 /api를 두 번 사용하여 최종 URL이 /api/groups/search가 되도록 함
        const response = await fetch(
          `/api/api/groups/search?${queryParams.toString()}`,
          {
            headers: {
              accept: '*/*',
              Authorization: authHeader
            }
          }
        );

        const data = await response.json();
        if (response.ok && data.success) {
          setGroups(data.response);
        } else {
          console.error(data.error);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchGroups();
  }, [filter, searchTerm]);

  return (
    <div css={pageWrapperStyle}>
      <BackHead title="그룹 리스트" />
      <div css={contentWrapperStyle}>
        <div css={searchContainerStyle}>
          <div css={searchBarStyle}>
            <input
              type="text"
              placeholder="그룹명을 검색하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <Search />
            </button>
          </div>
          <div css={dropdownStyle}>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="ALL">전체</option>
              <option value="OWNER">내가 방장인 그룹</option>
            </select>
          </div>
        </div>

        <div css={gridStyle}>
          {groups.map((group, index) => (
            <GroupCard
              key={index}
              // API에서 image가 빈 문자열이면 기본 아이콘을 사용
              groupImage={
                group.image && group.image !== '' ? (
                  group.image
                ) : (
                  <GroupProfileIcon width={50} height={50} />
                )
              }
              groupName={group.name}
              onClick={() => navigate('/group-detail')}
            />
          ))}
        </div>
      </div>

      <div css={addButtonStyle} onClick={() => navigate('/new-group')}>
        +
      </div>
    </div>
  );
};

const pageWrapperStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: calc(100vh - 100px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const contentWrapperStyle = css`
  flex: 1;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const searchContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  margin-top: 10px;
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
`;

const addButtonStyle = css`
  position: fixed;
  bottom: 100px;
  right: 30px;
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

export default GroupList;
