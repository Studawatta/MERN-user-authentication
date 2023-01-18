import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
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
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/dash"
            element={<Dashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
