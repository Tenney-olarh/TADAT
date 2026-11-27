const Rearny = () => {
  return (
    <div className="flex w-full justify-center bg-[#EFF4FF] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <section className="flex w-full max-w-[1200px] items-center justify-center rounded-[15px] bg-gradient-to-tr from-[#00B5B8] to-[#099EA1] px-5 py-10 shadow-[0px_4px_4px_0px_#00000040] sm:px-8 sm:py-14 lg:px-12">
        <div className="flex flex-col items-center gap-5 text-center sm:gap-7">
          <h1 className="text-[32px] font-medium leading-tight tracking-tight text-[#000000] sm:text-[40px] lg:text-[48px] lg:leading-[100%]">
            Ready To Earn?
          </h1>

          <p className="max-w-[783px] text-[15px] font-normal leading-relaxed tracking-[0%] text-[#000000] sm:text-[16px]">
            Whether you're looking to earn data rewards or scale your brand with
            100% verified human engagement. TADAT is built for you.
          </p>

          <button className="flex h-[53px] w-full max-w-[261px] cursor-pointer items-center justify-center rounded-[15px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] transition-colors hover:bg-[#FFFFFF]/80">
            <span className="bg-gradient-to-l from-[#30D5C7] to-[#0000FFE5] bg-clip-text text-[15px] font-medium text-transparent sm:text-[16px]">
              Get Started Now
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Rearny;
