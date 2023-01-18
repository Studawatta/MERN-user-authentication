import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8800/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert('User Registered');
  };

  return (
    <div className="bg-slate-200 h-[750px] flex justify-center items-center">
      <div className=" w-[500px] h-fit  border-2 border-black bg-white">
        <h1 className="text-[24px] font-bold ml-auto mr-auto w-fit">
          Register
        </h1>

        <form
          onSubmit={userRegister}
          className="w-fit bg-green-300 p-[10px] m-auto mt-[20px]"
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
            type="email"
            placeholder="Email"
            className="border-2 border-black mt-3 placeholder:text-center px-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black mt-3 placeholder:text-center px-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <input
            type="submit"
            value="Register"
            className="border-2 border-black ml-auto mr-auto block mt-3 w-[100px] font-semibold hover:bg-green-900 hover:text-white cursor-pointer"
          />
        </form>
        <Link
          to="/login"
          className="bg-blue-400 w-[100px] font-semibold mb-[10px] text-center mt-[10px] border-2 border-black m-auto block hover:bg-blue-900 hover:text-white"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Register;
