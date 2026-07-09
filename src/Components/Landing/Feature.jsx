import { Link } from "react-router-dom";
import User from "../../assets/Group 62.png";
import Task from "../../assets/qlementine-icons_task-16.png";
import Data from "../../assets/data.png";
import Advertisers from "../../assets/Group 64.png";
import Secure from "../../assets/Secure.png";
import Shield from "../../assets/Shield.png";
import Rename from "../../assets/Rename.png";
const Feature = () => {
  return (
    <div className="h-[507px] bg-[#EFF4FF] flex flex-row justify-between px-10 py-10">
      <section className="flex flex-col gap-5">
        <Link to="/user" className="flex flex-row gap-2">
          <img
            src={User}
            alt="User"
            className="w-[48px] h-[48px] object-cover rounded-[8px]"
          />
          <span className="w-[147px] h-[39px] font-medium text-[32px] leading-[100%] tracking-[0%] text-[#000000] flex items-center pt-[15px]">
            For Users
          </span>
        </Link>
        <p className="w-[358px] h-[38px] text-[#000000] leading-[100%] tracking-[0%] text-[16px] font-normal mt-[10px]">
          Get your mobile data covered by completing simple tasks that value
          your attention and time
        </p>
        <div className="w-[498px] h-[134px] rounded-[8px] border border-[#24A0D5] flex overflow-hidden">
          <div className="h-[134px] w-[10px] bg-[#24A0D5]"></div>
          <div className="h-[134px] w-[488px] bg-[#FFFFFF] flex flex-col gap-2 px-4 py-4">
            <Link>
              {" "}
              <img src={Task} alt="Task" />
            </Link>
            <p className="w-[151px] h-[29px] font-medium text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
              Simple Tasks
            </p>
            <p className="font-medium text-[16px] leading-[100%] tracking-[0%] text-[#000000] w-[411px] h-[38px]">
              Participate in quick surveys, engagement, andother tasks to build
              your data reward balance instantly.
            </p>
          </div>
        </div>
        <div className="w-[498px] h-[134px] rounded-[8px] border border-[#24A0D5] flex overflow-hidden">
          <div className="h-[134px] w-[10px] bg-[#24A0D5]"></div>
          <div className="h-[134px] w-[488px] bg-[#FFFFFF] flex flex-col gap-2 px-4 py-4">
            <Link>
              {" "}
              <img src={Data} alt="Data" />
            </Link>
            <p className="w-[238px] h-[29px] font-medium text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
              Instant Data Payouts
            </p>
            <p className="font-medium text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
              Once you reach the minimum balance, simply initiate a withdrawal
              to claim your mobile data.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#DCE9FF] w-[529px] h-[432px] rounded-[10px] flex flex-col py-5 px-4 gap-5">
        <Link className="flex flex-row gap-2">
          <img
            src={Advertisers}
            alt="Advertisers"
            className="w-[48px] h-[48px] object-cover rounded-[8px]"
          />{" "}
          <span className="w-[235px] h-[39px] font-medium text-[32px] leading-[100%] tracking-[0%] text-[#000000] flex items-center pt-[15px]">
            For Advertisers
          </span>
        </Link>
        <div className="w-[497px] h-[339px] bg-[#FFFFFF] rounded-[8px] py-5 px-5">
          <p className="w-[464px] h-[50px] font-medium text-[21px] leading-[100%] tracking-[0%]">
            Get verified human engagement, transparent and secure
          </p>
          <div className="flex flex-row gap-2 mt-4">
            <Link>
              <img
                src={Secure}
                alt="Secure"
                className="w-[19.88px] h-[21.3px]"
              />{" "}
            </Link>
            <p className="flex flex-col gap-2">
              {" "}
              <span className="text-[#000000] text-[20px] font-medium leading-[100%] tracking-[0%] ">
                Zero Bot Interaction
              </span>
              <h1 className="w-[415px] h-[38px] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
                Multi-layered verification ensuring 100% human profile
                engagement
              </h1>
            </p>
          </div>
          <section className="flex flex-row gap-2 mt-4">
            <Link>
              <img src={Shield} alt="Shield" />
            </Link>
            <p>
              <span className="text-[#000000] text-[20px] font-medium leading-[100%] tracking-[0%] ">
                Secure Protocol
              </span>
              <h1 className="w-[415px] h-[38px] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
                Task completion verification for ultimate campaign integrity
              </h1>
            </p>
          </section>
          <div className="flex flex-row gap-2 mt-4">
            <Link>
              <img src={Rename} alt="Rename" />
            </Link>
            <p>
              <span className="text-[#000000] text-[20px] font-medium leading-[100%] tracking-[0%] ">
                Real-time Analytics
              </span>
              <h1 className="w-[415px] h-[38px] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
                Deep insights into conversion paths and engagement metrics
              </h1>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Feature;
