import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code,
          state,
          phoneNumber,
          socialType: 'NAVER'
        })
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        console.log('회원가입 성공:', data);
        navigate('/mypage');
      } else if (data.error) {
        console.error('회원가입 실패:', data.error);
        setError(data.error); // 에러 상태 업데이트
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생', error);
      setError('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <h2>전화번호 입력</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="전화번호 입력"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">가입하기</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Join;
