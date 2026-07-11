import {Link} from "react-router-dom";
import Shina from "../../assets/shina.png";
const Reviews = () => {
  return (
    <div className="h-[350px] bg-[#F5F8FF] py-10 px-10">
      <h1 className="text-[36px] font-medium leading text-[#000000]  h-[44px] leading-[100%] tracking-[0%] flex text-center justify-center">
        Backed by a growing community of 1,000+ Users
      </h1>
      <section className="flex flex-row mt-10 justify-around">
        <div className="w-[382px] h-[186px] rounded-[8px] bg-[#FFFFFF] flex flex-col px-3 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Shina} alt="Shina" />
            </Link>
            <div>
              <h1 className="text-[16px] font-medium text-[#000000] leading-[100%] tracking-[0%] w-[171px] h-[19px]">
                Olasunkanmi Ademola
              </h1>
              <p className="h-[20px] w-[138px] text-[14px] text-[#000000] leading-[100%] tracking-[0%]">
                Freelancer
              </p>
            </div>
          </section>
          <p className="w-[334px] h-[57px] italic text-[#000000] text-[16px] leading-[100%] tracking-[0%] mt-7">
            "The transparency is what sold me. I know exactly how much each
            action is worth. A truly modern diagnostic tool for my wallet."
          </p>
        </div>

        <div className="w-[382px] h-[186px ] rounded-[8px] bg-[#FFFFFF] flex flex-col px-3 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Shina} alt="Shina" />
            </Link>
            <div>
              <h1 className="text-[16px] font-medium text-[#000000] leading-[100%] tracking-[0%] w-[171px] h-[19px]">
                Olasunkanmi Ademola
              </h1>
              <p className="h-[20px] w-[138px] text-[14px] text-[#000000] leading-[100%] tracking-[0%]">
                Freelancer
              </p>
            </div>
          </section>
          <p className="w-[334px] h-[57px] italic text-[#000000] text-[16px] leading-[100%] tracking-[0%] mt-7">
            "The transparency is what sold me. I know exactly how much each
            action is worth. A truly modern diagnostic tool for my wallet."
          </p>
        </div>

        <div className="w-[382px] h-[186px ] rounded-[8px] bg-[#FFFFFF] flex flex-col px-3 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Shina} alt="Shina" />
            </Link>
            <div>
              <h1 className="text-[16px] font-medium text-[#000000] leading-[100%] tracking-[0%] w-[171px] h-[19px]">
                Olasunkanmi Ademola
              </h1>
              <p className="h-[20px] w-[138px] text-[14px] text-[#000000] leading-[100%] tracking-[0%]">
                Freelancer
              </p>
            </div>
          </section>
          <p className="w-[334px] h-[57px] italic text-[#000000] text-[16px] leading-[100%] tracking-[0%] mt-7">
            "The transparency is what sold me. I know exactly how much each
            action is worth. A truly modern diagnostic tool for my wallet."
          </p>
        </div>
      </section>
    </div>
  );
};
export default Reviews;
