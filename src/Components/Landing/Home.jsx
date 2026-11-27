import HomeImage from "../../assets/Rectangle 92.png";

const Home = ({ onSignup }) => {
  return (
    <div
      id="home"
      className="flex w-full flex-col items-center gap-10 bg-[#F5F8FF] px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-10"
    >
      {/* LEFT HAND SIDE */}
      <div className="flex w-full flex-col lg:w-1/2 lg:max-w-[600px]">
        <h1 className="text-[38px] font-normal leading-[1.15] tracking-[0%] text-[#000000] sm:text-[48px] lg:text-[56px] lg:leading-[1.25] xl:text-[65px] xl:leading-[85px]">
          Turn Your <br /> Engagement Into{" "}
          <span className="font-medium text-[#1C7CDF]"> Mobile Data</span>
        </h1>

        <p className="mt-6 mb-8 max-w-[598px] text-[18px] font-normal leading-relaxed tracking-[0%] text-[#000000] sm:text-[20px] lg:mt-[50px] lg:mb-[50px] lg:text-[24px] lg:leading-[100%]">
          Turn your digital interactions into mobile data. Simply complete
          verified tasks on the{" "}
          <span className="font-semibold text-[#1C7CDF]">TADAT</span> to earn
          seamless data top-ups paid directly to your mobile carrier.
        </p>

        <button
          onClick={onSignup}
          className="h-[38px] w-[130px] shrink-0 cursor-pointer rounded-[8px] bg-[#1C7CDF] pt-0 font-medium text-[#FFFFFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#1C7CDF]/80"
        >
          Get Started
        </button>
      </div>

      {/* RIGHT HAND SIDE */}
      <div className="w-full max-w-[699px] lg:w-1/2 lg:max-w-none xl:max-w-[699px]">
        <img
          src={HomeImage}
          alt="Home"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
