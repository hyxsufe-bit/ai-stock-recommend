import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AIRecommend from './pages/AIRecommend';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AIRecommend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

