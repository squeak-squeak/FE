import { HEADER_HEIGHT, NAV_HEIGHT } from '@/Constants/layoutConstants';
import { css } from '@emotion/react';

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
  width: 371px;
  height: calc(100svh - (${HEADER_HEIGHT}px + ${NAV_HEIGHT}px));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${HEADER_HEIGHT}px;
`;

const notiContainer = css`
  height: 100svh;
  display: flex;
  flex-direction: column;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-top: 3px solid #efefef;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const notiBar = css`
  border-bottom: 3px solid #efefef;
  padding: 14px 0;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
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

const titleStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 42px;
  position: relative;
  color: black;
  font-size: 30px;
`;

export default function Notification() {
  return (
    <div css={container}>
      <div css={titleStyle}>알림</div>

      <div css={notiContainer}>
        {data.map((item, idx) => (
          <div key={idx} css={notiBar}>
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
  );
}

// Todo : 모달형식으로 변경
