import {useState} from "react";
import { Link } from "react-router-dom";
import Tadat from "../assets/tadathead.png"
import Google from "../assets/devicon_google.png";
import Vector from "../assets/Vector.png";
const Signup = ({ onClose, onLogin }) => {
          const [userName, setUserName] = useState("");
          const userNameValid = userName.length >= 3 && userName.length <= 10;
          const handleUserNameChange = (e) => {
            setUserName(e.target.value);
          };
  return (
    <div className="relative w-[436px] h-[640px] rounded-[30px] bg-[#EFF4FF] flex flex-col px-10 gap-2 py-6 ">
      <button
        onClick={onClose}
        className="absolute -top-1 -right-1 bg-[#1B78E0] text-[20px] font-bold w-[24px] h-[24px] rounded-[5px] cursor-pointer hover:text-[#24A0D5]p-1 flex items-center justify-center"
      >
        <img src={Vector} alt="Close" className="w-[13.2px] h-[13.2px] " />
      </button>
      <section className="w-[237px] h-[87px] flex flex-col gap-3 items-center justify-center mt-[20px] mx-auto">
        <div>
          <img src={Tadat} alt="Tadat Header" />
        </div>
        <div className="font-medium text-[20px] leading-[100%] tracking-[0%] text-[#000000]">
          Where every action pays
        </div>
      </section>
      {/* form section */}
      <div className=" flex flex-col gap-2">
        {/* email */}
        <section>
          <label
            htmlFor="email"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000] items-center"
          >
            Email address<span className="text-[#000000] text-[10px] ">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-[364px] h-[40px] bg-[#FFFFFF80]  border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
          />
        </section>
        {/* UserName */}
        <section>
          <label
            htmlFor="userName"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000] items-center"
          >
            Username<span className="text-[#000000] text-[10px] ">*</span>
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username"
            className="w-[364px] h-[40px] bg-[#FFFFFF80]  border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
            value={userName}
            onChange={handleUserNameChange}
          />
        </section>
        {/* PWD */}
        <section>
          <label
            htmlFor="password"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000] items-center"
          >
            Password<span className="text-[#000000] text-[10px] ">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-[364px] h-[40px] bg-[#FFFFFF80]  border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
          />
        </section>
        {/* Confirm PWD */}
        <section>
          <label
            htmlFor="confirmPassword"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000] items-center"
          >
            Confirm Password
            <span className="text-[#000000] text-[10px] ">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-[364px] h-[40px] bg-[#FFFFFF80]  border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
          />
        </section>
      </div>
      <button
        type="submit"
        className="w-[364px] h-[40px] bg-[#24A0D5] text-[#FFFFFF] font-medium text-[14px] rounded-[10px] hover:bg-[#1e88c0] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent"
      >
        Sign Up
      </button>
      {/* OR */}
      <section className="flex flex-row justify-center items-center gap-2 mt-1 w-[248px] h-[15px] text-[#00000080] mx-auto">
        <div className="w-[110px] h-[0] border border-[#6B728080] "></div>
        <div>or</div>
        <div className="w-[110px] h-[0] border border-[#6B728080] "></div>
      </section>
      {/* Google */}
      <button className="w-[364px] h-[40px] bg-[#FFFFFF] border border-[#24A0D5] rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent">
        <Link className="flex items-center gap-2">
          <img src={Google} alt="google" /> Continue With Google
        </Link>
      </button>
      <p className="text-[10px] text-[#00000080] text-center mt-1 h-[24px] w-[364px] tracking-[0%] leading-[100%] font-medium">
        By continuing, you agree to TADAT’s{" "}
        <Link to="/terms-of-service" className="text-[#24A0D5] underline">
          Terms of Service
        </Link>{" "}
        and acknowledged you’ve read our{" "}
        <Link to="/privacy-policy" className="text-[#24A0D5] underline ">
          Privacy Policy
        </Link>
        .{" "}
      </p>
      <section>
        <div className="w-[436px] h-[0] border border-[#6C7A7AB2] -mx-10 mt-3"></div>
        <div className=" flex flex-row justify-center items-center gap-2 mt-3 text-[16px] leading-[100%] tracking-[0%] text-[#00000080] font-medium">
          <p>Already a member?</p>
          <button onClick={onLogin} className="text-[#24A0D5] underline font-semibold">
              Log in
          </button>
        </div>
      </section>
    </div>
  );
};
export default Signup;