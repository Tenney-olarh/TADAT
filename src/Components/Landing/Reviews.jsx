import {Link} from "react-router-dom";
import Shina from "../../assets/shina.png";
import Okolie from "../../assets/okolie.png";
import Chidi from "../../assets/chidi.png";
const Reviews = () => {
  return (
    <div className="h-[350px] bg-[#F5F8FF] py-10 px-10">
      <h1 className="text-[36px] font-medium leading text-[#000000]  h-[44px] leading-[100%] tracking-[0%] flex text-center justify-center">
        Backed by a growing community of 1,000+ Users
      </h1>
      <section className="flex flex-row mt-10 justify-around">
        <div className="w-[382px] h-[186px] rounded-[8px] bg-[#FFFFFF] flex flex-col px-5 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Shina} alt="Shina" className="object-cover" />
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

        <div className="w-[382px] h-[186px ] rounded-[8px] bg-[#FFFFFF] flex flex-col px-5 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Okolie} alt="Okolie" className="object-cover" />
            </Link>
            <div>
              <h1 className="text-[16px] font-medium text-[#000000] leading-[100%] tracking-[0%] w-[171px] h-[19px]">
                Annette Okolie
              </h1>
              <p className="h-[20px] w-[138px] text-[14px] text-[#000000] leading-[100%] tracking-[0%]">
                Graduate
              </p>
            </div>
          </section>
          <p className="w-[334px] h-[57px] italic text-[#000000] text-[16px] leading-[100%] tracking-[0%] mt-7">
            "Best decision I've made for my digital life. No more expensive data
            plans that I have to pay for out of pocket."
          </p>
        </div>

        <div className="w-[382px] h-[186px ] rounded-[8px] bg-[#FFFFFF] flex flex-col px-5 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex flex-row gap-2">
            <Link>
              <img src={Chidi} alt="Chidi" className="object-cover" />
            </Link>
            <div>
              <h1 className="text-[16px] font-medium text-[#000000] leading-[100%] tracking-[0%] w-[171px] h-[19px]">
                Chidi Okechukwu
              </h1>
              <p className="h-[20px] w-[138px] text-[14px] text-[#000000] leading-[100%] tracking-[0%]">
                Student
              </p>
            </div>
          </section>
          <p className="w-[334px] h-[57px] italic text-[#000000] text-[16px] leading-[100%] tracking-[0%] mt-7">
            "TADAT has literally covered my monthly data costs just by engaging
            in tasks I already do on a daily basis. It's effortless."
          </p>
        </div>
      </section>
    </div>
  );
};
export default Reviews;
