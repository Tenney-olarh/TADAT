import { useState } from "react";
import { Link } from "react-router-dom";
import Tadat from "../assets/tadathead.png";
import Google from "../assets/devicon_google.png";
import Vector from "../assets/Vector.png";

const Signup = ({ onClose, onLogin }) => {
  const [userName, setUserName] = useState("");
  const userNameValid = userName.length >= 3 && userName.length <= 10;

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-[436px] flex-col gap-2 overflow-y-auto rounded-[30px] bg-[#EFF4FF] px-5 py-6 shadow-sm sm:px-10">
      <button
        onClick={onClose}
        aria-label="Close sign up"
        className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#1B78E0] hover:text-[#24A0D5]"
      >
        <img src={Vector} alt="Close" className="h-[13.2px] w-[13.2px]" />
      </button>

      <section className="mx-auto mt-4 flex w-full flex-col items-center gap-3 sm:mt-5">
        <img src={Tadat} alt="Tadat Header" />
        <p className="text-center text-[20px] font-medium leading-tight tracking-[0%] text-[#000000]">
          Where every action pays
        </p>
      </section>

      <div className="mt-4 flex flex-col gap-2 sm:mt-5">
        <section>
          <label
            htmlFor="email"
            className="block text-[14px] font-medium leading-tight tracking-[0%] text-[#000000]"
          >
            Email address <span className="text-[10px]">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 h-10 w-full rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-3 placeholder:text-[10px] placeholder:font-normal placeholder:text-[#6C7A7A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0D5]"
          />
        </section>

        <section>
          <label
            htmlFor="userName"
            className="block text-[14px] font-medium leading-tight tracking-[0%] text-[#000000]"
          >
            Username <span className="text-[10px]">*</span>
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username"
            value={userName}
            onChange={handleUserNameChange}
            className="mt-1 h-10 w-full rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-3 placeholder:text-[10px] placeholder:font-normal placeholder:text-[#6C7A7A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0D5]"
          />
          {userName && (
            <p
              className={`mt-1 text-[11px] ${userNameValid ? "text-[#0B7A4B]" : "text-[#C0392B]"}`}
            >
              {userNameValid
                ? "Username looks good"
                : "Use between 3 and 10 characters"}
            </p>
          )}
        </section>

        <section>
          <label
            htmlFor="password"
            className="block text-[14px] font-medium leading-tight tracking-[0%] text-[#000000]"
          >
            Password <span className="text-[10px]">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mt-1 h-10 w-full rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-3 placeholder:text-[10px] placeholder:font-normal placeholder:text-[#6C7A7A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0D5]"
          />
        </section>

        <section>
          <label
            htmlFor="confirmPassword"
            className="block text-[14px] font-medium leading-tight tracking-[0%] text-[#000000]"
          >
            Confirm Password <span className="text-[10px]">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="mt-1 h-10 w-full rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-3 placeholder:text-[10px] placeholder:font-normal placeholder:text-[#6C7A7A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0D5]"
          />
        </section>
      </div>

      <button
        type="submit"
        className="mt-3 h-10 w-full rounded-[10px] bg-[#24A0D5] text-[14px] font-medium text-[#FFFFFF] hover:bg-[#1e88c0] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent"
      >
        Sign Up
      </button>

      <section className="mx-auto mt-1 flex w-full items-center gap-2 text-[12px] text-[#00000080]">
        <span className="h-px flex-1 bg-[#6B728080]" />
        <p>or</p>
        <span className="h-px flex-1 bg-[#6B728080]" />
      </section>

      <button className="flex h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF] hover:bg-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent">
        <img src={Google} alt="Google" className="h-5 w-5" />
        Continue With Google
      </button>

      <p className="mt-2 w-full text-center text-[11px] font-medium leading-relaxed tracking-[0%] text-[#00000080]">
        By continuing, you agree to TADAT’s{" "}
        <Link to="/terms-of-service" className="text-[#24A0D5] underline">
          Terms of Service
        </Link>{" "}
        and acknowledged you’ve read our{" "}
        <Link to="/privacy-policy" className="text-[#24A0D5] underline">
          Privacy Policy
        </Link>
        .
      </p>

      <section className="mt-3 border-t border-[#6C7A7AB2] pt-3">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-center text-[15px] leading-snug tracking-[0%] text-[#00000080] font-medium sm:text-[16px]">
          <p>Already a member?</p>
          <button
            onClick={onLogin}
            className="font-semibold text-[#24A0D5] underline"
          >
            Log in
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signup;
