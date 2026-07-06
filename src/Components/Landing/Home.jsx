import HomeImage from "../../assets/Rectangle 92.png";
        const Home = () => (
          <div className="flex flex-row justify-between bg-[#F2F6FF] px-10 py-10 mt-[80px]">
            {/* LEFT HAND SIDE */}
            <div className="flex flex-col max-w-[600px]">
              <h1 className="font-normal text-[65px] tracking-[0%] text-[#000000] leading-[80px]">
                Turn Your <br /> Engagement Into{" "}
                <span className="text-[#1C7CDF]"> Mobile Data</span>
              </h1>
              <p className="w-[598px] h-[116px] font-extralight text-[24px] tracking-[0%] text-[#000000] leading-[100%] mt-[50px] mb-[50px]">
                Turn your digital interactions into mobile data. <br />Simply complete
                verified tasks on the <span className="text-[#1C7CDF]">
                  TADAT
                </span> to earn <br /> seamless data top-ups paid directly to your <br />
                mobile carrier.
              </p>
              <button className="w-[130px] h-[38px] rounded-[8px] bg-[#1C7CDF] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#1C7CDF]/80 pt-[0px]">
                Get Started
              </button> 
            </div>
            {/* RIGHT HAND SIDE  */}
            <div className="flex-shrink-0">
              <img
                src={HomeImage}
                alt="Home"
                className="w-[699px] h-[503px] object-cover"
              />
            </div>
          </div>
        );
export default Home;  