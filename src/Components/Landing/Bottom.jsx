import { Link } from "react-router-dom";
import Twitter from "../../assets/x_logo.svg.png";
const Bottom = () => {
  return (
    <div className="w-full h-[286px] bg-[#F3F5FF] flex flex-row justify-around items-center p-10">
      <section className="flex flex-col gap-5 w-[489px] h-[89px]">
        <h1 className="text-[36px] leading-[100%] tracking-tight text-[#000000] font-medium">
          TADAT
        </h1>
        <p className=" h-[19px] text-[16px] leading-[100%] tracking-[0%] text-[#0D1C2E] font-normal">
          Empowering the digital world through value-based connectivity.
        </p>
      </section>

      <div className="flex flex-col gap-5 w-[128px] h-[72px]">
        <h1 className="w-[93px] h-[29px] text-[24px] leading-[100%] tracking-tight text-[#000000] font-medium">
          Support
        </h1>
        <p className="w-[489px] h-[19px] text-[16px] leading-[100%] tracking-[0%] text-[#0D1C2E] font-normal">
          Contact Support
        </p>
      </div>

      <section className="flex flex-col gap-5 w-[130px] h-[75px]">
        <h1 className="w-[63px] h-[29px] text-[24px] leading-[100%] tracking-tight text-[#000000] font-medium">
          Legal
        </h1>
        <p className=" text-[16px] leading-[100%] tracking-[0%] text-[#0D1C2E] font-normal">
          Privacy Policy
        </p>
        <p className=" text-[16px] leading-[100%] tracking-[0%] text-[#0D1C2E] font-normal">
          Terms of Service
        </p>
      </section>

      <div className="flex flex-col gap-5 w-[191px] h-[75px]">
        <h1 className="w-[191px] h-[29px] text-[24px] leading-[100%] tracking-tight text-[#000000] font-medium">
          Connect with Us
        </h1>
        <Link className="flex flex-row gap-2">
          <img
            src={Twitter}
            alt="Twitter"
            className="w-[24px] h-[22px] object-cover"
          />
          <span>X/Twitter</span>
        </Link>
      </div>
    </div>
  );
};
export default Bottom;
