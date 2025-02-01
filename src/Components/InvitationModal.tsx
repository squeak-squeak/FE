import { css } from '@emotion/react';
import React from 'react';
import { Copy } from 'lucide-react';

const modalWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalContentStyle = css`
  background: white;
  width: 80%;
  max-width: 350px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const closeButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const headerStyle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

const inviteCodeWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f2f2f1;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  color: gray;
`;

const copyButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

const confirmButtonStyle = css`
  width: 100%;
  padding: 10px;
  background: #ffcb10;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const blurredBottomNavStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

interface GroupInvitationModalProps {
  groupName: string;
  inviteCode: string;
  onClose: () => void;
}

const InvitationModal: React.FC<GroupInvitationModalProps> = ({
  groupName,
  inviteCode,
  onClose
}) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    alert('초대 코드가 복사되었습니다!');
  };

  return (
    <>
      <div css={modalWrapperStyle}>
        <div css={modalContentStyle}>
          <button css={closeButtonStyle} onClick={onClose}>
            ✖
          </button>
          <div css={headerStyle}>{groupName} 초대하기</div>
          <div css={inviteCodeWrapperStyle}>
            <span>{inviteCode}</span>
            <button css={copyButtonStyle} onClick={handleCopyCode}>
              <Copy width={20} />
            </button>
          </div>
          <button css={confirmButtonStyle} onClick={onClose}>
            확인
          </button>
        </div>
      </div>
      <div css={blurredBottomNavStyle} />
    </>
  );
};

export default InvitationModal;
