import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Components/Common/Layout';
import Start from '@/Pages/Start';
import Home from '@/Pages/Home';
import NaverRedirect from '@/Pages/Auth/NaverRedirect';
import GroupList from '@/Pages/GroupList';
import VoteResult from '@/Pages/VoteResult';
import GroupDetail from '@/Pages/GroupDetail';
import NewVote from '@/Pages/NewVote';
import NewGroup from '@/Pages/NewGroup';
import Vote from '@/Pages/Vote';
import ActiveVotes from '@/Pages/ActiveVotes';
import FinishedVotes from '@/Pages/FinishedVotes';
import Mypage from '@/Pages/Mypage';
import Notification from '@/Pages/Notification';
import { AuthProvider } from '@/Pages/Context/AuthContext';
import KakaoRedirect from './Pages/Auth/KakaoRedirect';
import GoogleRedirect from './Pages/Auth/GoogleRedirect';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth/callback" element={<NaverRedirect />} />
            <Route path="/auth/signup-callback" element={<NaverRedirect />} />
            <Route path="/auth/kakao" element={<KakaoRedirect />} />
            <Route path="/auth/google" element={<GoogleRedirect />} />
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
      </AuthProvider>
    </Router>
  );
};

export default App;
