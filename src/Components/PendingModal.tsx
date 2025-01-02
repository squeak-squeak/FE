import { css } from '@emotion/react';
import React, { useState } from 'react';
import { theme } from '@/Style/theme';

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

const listItemStyle = css`
  padding: 10px;
  border-radius: 10px;
  background: #f2f2f1;
  margin-bottom: 10px;
  cursor: pointer;
  color: black;
`;

const activeItemStyle = css`
  background: #fff4cc;
  border: 1px solid ${theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const buttonWrapperStyle = css`
  display: flex;
  gap: 10px;
`;

const approveButtonStyle = css`
  padding: 5px 15px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const rejectButtonStyle = css`
  padding: 5px 15px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

interface PendingModalProps {
  pendingRequests: string[];
  onClose: () => void;
}

const PendingModal: React.FC<PendingModalProps> = ({
  pendingRequests,
  onClose
}) => {
  const [activeRequest, setActiveRequest] = useState<string | null>(null);

  return (
    <div css={modalWrapperStyle}>
      <div css={modalContentStyle}>
        <button css={closeButtonStyle} onClick={onClose}>
          ✖
        </button>
        <div css={headerStyle}>승인 대기 목록</div>
        {pendingRequests.map((request, index) => (
          <div
            key={index}
            css={[listItemStyle, activeRequest === request && activeItemStyle]}
            onClick={() =>
              setActiveRequest(request === activeRequest ? null : request)
            }>
            {activeRequest === request ? (
              <div css={buttonWrapperStyle}>
                <button css={approveButtonStyle}>승인</button>
                <button css={rejectButtonStyle}>거절</button>
              </div>
            ) : (
              request
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingModal;
