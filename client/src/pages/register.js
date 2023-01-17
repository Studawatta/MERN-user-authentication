import React from 'react';

const Register = () => {
  return (
    <div>
      <div className=" w-[500px]  border-2 border-black">
        <h1 className="text-[24px] font-bold ml-auto mr-auto w-fit">
          Register
        </h1>

        <form className="w-fit bg-green-300 p-[10px]">
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-black placeholder:w-fit placeholder:block placeholder:ml-[20px]"
          />
          <br />

          <input
            type="email"
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            placeholder="Password"
          />
          <br />

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
