import Header from '@/Components/Header';
import { css } from '@emotion/react';
import BackHead from '@/Components/Common/BackHead';

const data = [
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!',
  '그룹 A의 [몇 번째 투표]에서 5표를 획득했습니다!'
];

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const notiContainer = css`
  display: flex;
  flex-direction: column;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-top: 3px solid #efefef;
  height: 100svh;
  overflow: scroll;
`;

const notiBar = css`
  border-bottom: 3px solid #efefef;
  padding: 14px 0;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 15px;
`;

const button = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 26px 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #f2f2f1;
  &:hover {
    background-color: #f82b3a;
  }
`;

export default function Notification() {
  return (
    <>
      <Header isShowInviteIcon={false} />
      <div css={container}>
        <BackHead title="알림" />

        <div css={notiContainer}>
          {data.map((item) => (
            <div css={notiBar}>
              <div
                css={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '100%',
                  backgroundColor: '#efefef'
                }}
              />
              {item}
            </div>
          ))}
        </div>

        <button css={button}>취소</button>
      </div>
    </>
  );
}

// Todo: header 페이지마다 안넣게
// layout에 오른쪽 왼쪽 회색 경계선 만들기
// 기본 세팅된 폰트와 폰트색깔 수정
// 스크롤 처리
