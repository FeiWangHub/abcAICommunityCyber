import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import InternalResources from './pages/InternalResources';
import ExternalResources from './pages/ExternalResources';
import FeedbackWidget from './components/FeedbackWidget';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internal" element={<InternalResources />} />
          <Route path="/external" element={<ExternalResources />} />
        </Routes>
      </Layout>
      <FeedbackWidget />
    </Router>
  );
}

export default App;
