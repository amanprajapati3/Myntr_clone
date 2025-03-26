import React from "react";

const Login = () => {
  return (
    <div className="sm:flex sm:justify-center sm:mt-32">
      <div className="">
        <h1 className="py-10 pl-5 sm:pl-0">
          <span className="text-xl font-semibold">Login</span> or{" "}
          <span className="text-xl font-semibold">Signup</span>
        </h1>
        <input
          type="number"
          placeholder="+91 | Mobile Number"
          className="text-xl py-2 px-5 ml-6 sm:px-12 mb-8 border-2 border-gray-500"
        />
        <br />
        <p className="py-2 pl-6">
          By continuing, I agree to the{" "}
          <span className="cursor-pointer text-red-600">
            Terms of Use & Privacy Policy
          </span>
        </p>
        <button className="bg-pink-700 text-white font-bold py-2 px-20 mx-10 sm:px-32 my-5 rounded-xl">
          Continue
        </button>
        <p className="pl-6">
          Have trouble logging in?{" "}
          <span className="text-red-600 cursor-pointer">Get help</span>
        </p> 
      </div>
    </div>
  );
};

export default Login;
