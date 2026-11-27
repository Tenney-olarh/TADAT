import Twitter from "../../assets/x_logo.svg.png";

const Bottom = () => {
  return (
    <footer className="w-full bg-[#F3F5FF] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-10">
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] font-medium leading-tight tracking-tight text-[#000000] sm:text-[36px]">
            TADAT
          </h2>
          <p className="max-w-[489px] text-[15px] font-normal leading-relaxed tracking-[0%] text-[#0D1C2E] sm:text-[16px]">
            Empowering the digital world through value-based connectivity.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-[22px] font-medium leading-tight tracking-tight text-[#000000] sm:text-[24px]">
            Support
          </h3>
          <p className="text-[15px] font-normal leading-relaxed tracking-[0%] text-[#0D1C2E] sm:text-[16px]">
            Contact Support
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-[22px] font-medium leading-tight tracking-tight text-[#000000] sm:text-[24px]">
            Legal
          </h3>
          <p className="text-[15px] font-normal leading-relaxed tracking-[0%] text-[#0D1C2E] sm:text-[16px]">
            Privacy Policy
          </p>
          <p className="text-[15px] font-normal leading-relaxed tracking-[0%] text-[#0D1C2E] sm:text-[16px]">
            Terms of Service
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-[22px] font-medium leading-tight tracking-tight text-[#000000] sm:text-[24px]">
            Connect with Us
          </h3>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-[15px] hover:underline sm:text-[16px]"
          >
            <img
              src={Twitter}
              alt=""
              aria-hidden="true"
              className="h-[22px] w-[24px] shrink-0 object-cover"
            />
            <span>X/Twitter</span>
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Bottom;
