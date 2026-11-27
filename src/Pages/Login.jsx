import { Link } from "react-router-dom";
import Tadat from "../assets/tadathead.png";
import Google from "../assets/devicon_google.png";
import Vector from "../assets/Vector.png";

const Login = ({ onClose, onSignUp }) => {
  return (
    <div className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-[436px] flex-col gap-2 overflow-y-auto rounded-[30px] bg-[#EFF4FF] px-5 py-6 shadow-sm sm:px-10">
      <button
        onClick={onClose}
        aria-label="Close login"
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

      <div className="mt-4 flex flex-col gap-3 sm:mt-5">
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
            placeholder="youraddress@email.com"
            className="mt-1 h-10 w-full rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-3 placeholder:text-[10px] placeholder:font-normal placeholder:text-[#6C7A7A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0D5]"
          />
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

          <div className="mt-2 flex flex-row flex-wrap items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-3 w-3"
              />
              <label
                htmlFor="remember"
                className="text-[14px] font-medium leading-tight tracking-[0%] text-[#000000]"
              >
                Remember me
              </label>
            </section>
            <Link to="/forgot-password" className="text-[12px] text-[#24A0D5]">
              Forgot Password?
            </Link>
          </div>
        </section>
      </div>

      <button className="mt-2 w-full cursor-pointer rounded-[10px] bg-[#24A0D5] px-4 py-2 text-[#FFFFFF] hover:bg-[#1a7bbd]">
        Login
      </button>

      <section className="mx-auto flex w-full items-center gap-2 text-[12px] leading-tight tracking-[0%] text-[#00000080]">
        <span className="h-px flex-1 bg-[#6B728080]" />
        <p>or</p>
        <span className="h-px flex-1 bg-[#6B728080]" />
      </section>

      <button className="flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-[10px] border border-[#24A0D5] bg-[#FFFFFF80] px-4 hover:bg-[#f0f0f0]">
        <img src={Google} alt="Google" className="mr-2 h-5 w-5" />
        Continue with Google
      </button>

      <section className="mt-4 border-t border-[#6C7A7AB2] pt-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-center">
          <p className="text-[15px] font-medium leading-snug tracking-[0%] text-[#3C4949] sm:text-[16px]">
            Do not have an account?
          </p>
          <button
            onClick={onSignUp}
            className="text-[15px] font-bold leading-snug tracking-[0%] text-[#2BBECD] underline sm:text-[16px]"
          >
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
