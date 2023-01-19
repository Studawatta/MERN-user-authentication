import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      console.log(user);
      setName(user.name);
      if (!user) {
        localStorage.removeItem('token');
        alert('something went wrong');
      }
    } else {
      alert('Please log in');
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome {name}</h1>
      <h1>This is user dashboard</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
