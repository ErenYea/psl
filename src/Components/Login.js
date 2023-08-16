import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpusingEmail = async () => {
    const response = await axios.post(
      "https://sleepy-river-05914-18663326ac31.herokuapp.com/user/signin",
      {
        email,
        password,
      }
    );
    console.log(response);
    if (response.status == 200) {
      const data = await response.data;
      if (data["status"] == "FAILED") {
        document.getElementById("error").classList.remove("hidden");
      } else {
        setUser(data.data[0]);
        navigate("/welcome");
      }
    } else {
      console.log(response);
    }
  };
  const singupWithGoogle = () => {};
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center mt-4 justify-center">
      <img src="PSL_icon.png" alt="" className="w-fit h-fit" />
      <div className="text-4xl font-bold text-[#11a453] tracking-wide">
        {" "}
        Interpreter
      </div>
      <div className="text-red-500 mt-4 hidden" id="error">
        Not Valid Credentials
      </div>
      <div class="relative h-10 mt-8 w-[300px]">
        <input
          class="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email Address
        </label>
      </div>
      <div class="relative h-10 mt-8 w-[300px]">
        <input
          class="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
      <div
        className="mt-8 text-center text-xl font-semibold text-gray-600 border p-2 rounded-3xl hover:bg-blue-300 cursor-pointer hover:text-white w-[300px]"
        onClick={SignUpusingEmail}
      >
        Log In
      </div>
      {/* <div
        className=" cursor-pointer border text-xl font-semibold text-gray-700  rounded-3xl mt-4 flex justify-center items-center hover:bg-gray-300 w-[300px]"
        onClick={singupWithGoogle}
      >
        Continue with Google
        <img
          src="https://auth.services.adobe.com/img/social/sml-google-logo.svg"
          alt=""
          className="ml-4 bg-inherit"
        />
      </div> */}
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full h-px my-8 bg-gray-200 border-0 " />
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2  ">
          or
        </span>
      </div>
      <div className=" text-gray-600">
        Don't have an account, then{" "}
        <span
          className=" text-blue-400 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </div>
    </div>
  );
};

export default Login;
