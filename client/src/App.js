import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Register />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
