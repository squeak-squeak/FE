import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Components/Common/Layout';
import Start from '@/Pages/Start';
import Home from '@/Pages/Home';
import AuthCallback from '@/Pages/Auth/NaverCallback';
import Join from '@/Pages/Auth/Join';
import GroupList from '@/Pages/GroupList';
import VoteResult from './Pages/VoteResult';
import GroupDetail from './Pages/GroupDetail';
import NewVote from '@/Pages/NewVote';
import NewGroup from '@/Pages/NewGroup';
import Vote from '@/Pages/Vote';
import ActiveVotes from '@/Pages/ActiveVotes';
import FinishedVotes from '@/Pages/FinishedVotes';
import Mypage from '@/Pages/Mypage';
import Notification from '@/Pages/Notification';
import { AuthProvider } from '@/Pages/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth/callback" element={<Join />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/group-list" element={<GroupList />} />
            <Route path="/vote-result" element={<VoteResult />} />
            <Route path="/group-detail" element={<GroupDetail />} />
            <Route path="/new-vote" element={<NewVote />} />
            <Route path="/new-group" element={<NewGroup />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/active-votes" element={<ActiveVotes />} />
            <Route path="/finished-votes" element={<FinishedVotes />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
