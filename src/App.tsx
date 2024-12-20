import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Components/Layout';
import Start from '@/Pages/Start';
import Home from '@/Pages/Home';
import GroupList from '@/Pages/GroupList';
import VoteResult from './Pages/VoteResult';
import GroupDetail from './Pages/GroupDetail';

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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
