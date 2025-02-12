import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = ({handleLogin}) => {
 
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  
  const submitForm = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setemail(" ");
    setPassword("");
  };

  const emailHandler = (e) => {
    setemail(e.target.value);
  };
  const passHandler = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="flex  w-screen h-screen justify-center  items-center max-w-full ">
      <div className="border-orange-400 border-2 p-8 rounded-lg px-16 shadow-orange-400 shadow-md inset-0 ring-opacity-75">
        <form
          onSubmit={submitForm}
          className="flex flex-col justify-center items-center "
        >
          <input
            onChange={emailHandler}
            value={email}
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
            className="px-8 py-3 outline-none rounded-full border-2 border-orange-300 flex justify-center items-center bg-transparent text-gray-400 placeholder:text-gray-400 "
            required
          />
          <input
            value={password}
            onChange={passHandler}
            type="password"
            placeholder="Enter your password"
            name=""
            id=""
            className="px-8 py-3 outline-none rounded-full border-2 border-orange-300 flex justify-center items-center text-gray-400 bg-transparent mt-4 placeholder:text-gray-400"
            required
          />
          <button  
          className="px-7 w-4/5 py-2 outline-none rounded-full text-tighter border-2  flex justify-center items-center bg-orange-600 text-xl font-semibold mt-4 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
