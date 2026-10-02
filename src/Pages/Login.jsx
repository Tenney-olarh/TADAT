import { Link } from "react-router-dom";
import Tadat from "../assets/tadathead.png"
import Google from "../assets/devicon_google.png";
import Vector from "../assets/Vector.png";
const Login = ({onClose}) => {
  return (
    // <div className=" flex items-center justify-center bg-[#F4F7FF] p-4">
    <div className="relative w-[436px] h-[526px] rounded-[30px] bg-[#EFF4FF] flex flex-col px-10 gap-2 py-6 shadow-sm">
      <button
        onClick={onClose}
        className="absolute -top-1 -right-1 bg-[#1B78E0] text-[20px] font-bold w-[24px] h-[24px] rounded-[5px] cursor-pointer hover:text-[#24A0D5]p-1 flex items-center justify-center"
      >
        <img
          src={Vector}
          alt="Close"
          className="w-[13.2px] h-[13.2px] "
        />
      </button>
      <section className="w-[237px] h-[87px] flex flex-col gap-3 items-center justify-center mt-[20px] mx-auto">
        <div>
          <img src={Tadat} alt="Tadat Header" />
        </div>
        <div className="font-medium text-[20px] leading-[100%] tracking-[0%] text-[#000000]">
          Where every action pays
        </div>
      </section>
      <div className="mt-5 flex flex-col gap-3">
        {/* email */}
        <section>
          <label
            htmlFor="email"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000] items-center"
          >
            Email address <span className="text-[#000000] text-[10px]">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="youraddress@email.com"
            className="w-[364px] h-[40px] border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 bg-[#FFFFFF80] placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
          />
        </section>
        {/* PWD */}
        <section>
          <label
            htmlFor="password"
            className="w-[94px] h-[17px]  font-medium text-[14px] leading-[100%] tracking-[0%] text-[#000000]"
          >
            Password <span className="text-[#000000] text-[10px]">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-[364px] h-[40px] border border-[#24A0D5] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#24A0D5] focus:border-transparent  px-3 bg-[#FFFFFF80] placeholder:text-[#6C7A7A0] placeholder:text-[10px] placeholder:font-normal"
          />
          <div className="flex flex-row justify-between items-center mt-2">
            <section className="flex flex-row  mt-2 items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-[12px] h-[12px] text-[#000000]"
              />
              <label
                htmlFor="remember"
                className="text-[14px] text-[#000000] w-[96px] h-[17px] font-medium leading-[100%] tracking-[0%]"
              >
                Remember me
              </label>
            </section>
            <section>
              <Link
                to="/forgot-password"
                className="text-[#24A0D5] text-[12px] "
              >
                Forgot Password?
              </Link>
            </section>
          </div>
        </section>
      </div>
      {/* button */}
      <div>
        <button className="w-full bg-[#24A0D5] text-[#FFFFFF] py-2 px-4 rounded-[10px]  cursor-pointer hover:bg-[#1a7bbd]">
          Login
        </button>
      </div>
      {/* Or */}
      <section className=" flex flex-row  items-center gap-2 w-[248px] h-[18px] mx-auto text-[12px] leading-[100%] tracking-[0%] text-[#00000080] ">
        <div className="w-[110px] h-[0] border border-[#6B728080]"></div>
        <p className="w-[12px] h-[15px] ">or</p>
        <div className="w-[110px] h-[0] border border-[#6B728080]"></div>
      </section>
      {/* Google */}
      <div>
        <button className="w-full bg-[#FFFFFF80] text-[#000000] py-2 px-4 rounded-[10px]  cursor-pointer h-[40px] hover:bg-[#f0f0f0] border border-[#24A0D5] flex flex-row justify-center items-center">
          <img src={Google} alt="Google" className="w-[20px] h-[20px] mr-2" />
          Continue with Google
        </button>
      </div>
      <section>
        <div className="w-[436px] h-[0] border border-[#6C7A7AB2] -mx-10 mt-5"></div>
        <div className="flex flex-row justify-center items-center gap-2 mt-2">
          <p className="font-medium text-[16px] text-[#3C4949] leading-[100%] tracking-[0%]">
            Do not have an account?
          </p>
          <Link
            to="/signup"
            className="text-[#2BBECD] text-[16px] font-bold leading-[100%] tracking-[0%] underline"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
    // </div>
  );
};
export default Login;
