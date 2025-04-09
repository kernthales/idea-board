import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './pages/BoardList';
import BoardPage from './pages/BoardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
