import { Link } from "react-router-dom";
import Tadat from "../assets/tadathead.png"
import Google from "../assets/devicon_google.png";
import Vector from "../assets/Vector.png";
const Signup = ({onClose}) => { 
    return (
      <div className="relative w-[436px] h-[640px] rounded-[30px] bg-[#EFF4FF] flex flex-col px-10 gap-2 py-6 ">
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
      </div>
    );
}
export default Signup;