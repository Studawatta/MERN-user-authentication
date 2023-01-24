import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [details, setDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [ddd, setddd] = useState('ss');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const reset = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const userRegister = async (e) => {
    e.preventDefault();
    setddd('sssssssssssssssssssssssss');
    console.log(ddd);
    // const username = details.username;
    // const email = details.email;
    // const password = details.password;

    // const response = await fetch('http://localhost:8800/api/user/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username,
    //     email,
    //     password,
    //   }),
    // });
    // const data = await response.json();
    // alert(data);
    // reset();
  };

  const validate = (details) => {
    console.log('I am in validate');

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // // const usernameRegex = /^[A-Za-z0-9]{3,16}$/;

    // if (!details.username) {
    //   setErrors.username('Username is required!');
    // }
    // if (!details.email) {
    //   setErrors.email('Email is required!');
    // } else if (!emailRegex.test(details.email)) {
    //   setErrors.email('This is not valid email format');
    // }
    // if (!details.password) {
    //   setErrors.password('Password is required!');
    // } else if (!passwordRegex.test(details.password)) {
    //   setErrors.password(
    //     'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    //   );
    // }
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
          <div className="w-[250px] bg-white border-2 border-slate-400 rounded-[10px] p-2 pl-4 ">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="placeholder:text-center w-[90%] outline-none"
              ref={nameRef}
              onChange={(e) => setDetails.username(e.target.value)}
            />
          </div>
          <p className="text-red-600 text-[12px] font-medium italic">
            {errors.username}
          </p>

          <div className="w-[250px] bg-white border-2 border-slate-400 rounded-[10px] p-2 pl-4  mt-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="placeholder:text-center w-[90%] outline-none"
              ref={emailRef}
              onChange={(e) => setDetails.email(e.target.value)}
            />
          </div>
          <p className="text-red-600 text-[12px] font-medium italic"></p>

          <div className="w-[250px] bg-white border-2 border-slate-400 rounded-[10px]  p-2 pl-4 mt-4 flex justify-between">
            <input
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Password"
              name="password"
              className=" placeholder:text-center w-[90%] outline-none"
              ref={passwordRef}
              onChange={(e) => setDetails.password(e.target.value)}
            />
            {showPassword ? (
              <AiOutlineEye
                className="text-[22px] cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="text-[22px] cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

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
