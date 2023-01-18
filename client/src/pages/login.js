import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8800/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      navigate('/dash');
    } else {
      alert('Please check your name or password');
    }
  };
  return (
    <div className="bg-slate-200 h-[750px] flex justify-center items-center">
      <div className=" w-[500px] h-fit  border-2 border-black bg-white">
        <h1 className="text-[24px] font-bold ml-auto mr-auto w-fit">Log In</h1>
        <form
          className="w-fit bg-green-300 p-[10px] m-auto mt-[20px] mb-[10px]"
          onSubmit={userLogin}
        >
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-black placeholder:text-center px-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black placeholder:text-center px-2 mt-3"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <input
            type="submit"
            value="Log In"
            className="border-2 border-black ml-auto mr-auto  block mt-3 w-[100px] font-semibold hover:bg-green-900 hover:text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
