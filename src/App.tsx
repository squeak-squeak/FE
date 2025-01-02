import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Components/Common/Layout';
import Start from '@/Pages/Start';
import Home from '@/Pages/Home';
import GroupList from '@/Pages/GroupList';
import VoteResult from './Pages/VoteResult';
import GroupDetail from './Pages/GroupDetail';
import Notification from '@/Pages/Notification';
import NewVote from '@/Pages/NewVote';

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
          <Route path="/notification" element={<Notification />} />
          <Route path="/new-vote" element={<NewVote />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

// Todo: 교진님 BackHead.tsx컴포넌트 활용해서 페이지 폴더에 있는 파일들 수정해주세요
