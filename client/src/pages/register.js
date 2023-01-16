import React from 'react';

const Register = () => {
  return (
    <div>
      <div className=" w-[500px]  border-2 border-black">
        <h1>SS</h1>
        <p>dddd</p>
        <form>
          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="submit"
            value="Register"
          />
        </form>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Register;
