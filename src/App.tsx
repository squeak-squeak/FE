import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Components/Common/Layout';
import Start from '@/Pages/Start';
import Home from '@/Pages/Home';
import GroupList from '@/Pages/GroupList';
import VoteResult from './Pages/VoteResult';
import GroupDetail from './Pages/GroupDetail';
import NewVote from '@/Pages/NewVote';
import NewGroup from '@/Pages/NewGroup';
import Vote from '@/Pages/Vote';
import ActiveVotes from '@/Pages/ActiveVotes';
import FinishedVotes from '@/Pages/FinishedVotes';
import Mypage from '@/Pages/Mypage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grouplist" element={<GroupList />} />
          <Route path="/voteresult" element={<VoteResult />} />
          <Route path="/groupdetail" element={<GroupDetail />} />
          <Route path="/new-vote" element={<NewVote />} />
          <Route path="/new-group" element={<NewGroup />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/active-votes" element={<ActiveVotes />} />
          <Route path="/finished-votes" element={<FinishedVotes />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

// Todo: 교진님 BackHead.tsx컴포넌트 활용해서 페이지 폴더에 있는 파일들 수정해주세요
