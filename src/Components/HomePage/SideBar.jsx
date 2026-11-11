import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, ListTodo, Wallet, Bell } from "lucide-react";
import Logo from "../../assets/logsNav.png";
const SideBar = () => {
    return (
      <div className="w-[240px] h-screen bg-[#F9FAFE] px-[20px]  flex flex-col gap-[15px] border-r-[#C8D5D5] border-r-[1px]">
        <Link
          to="/"
          className="flex items-center justify-center py-[35px] px-[30px]"
        >
          <img src={Logo} alt="Logo" className="w-[131px] h-[55px]" />
        </Link>
        <section className="flex flex-col gap-[8px] -mt-5">
          <NavLink
            to="/dashboard"
            className="flex flex-row items-center gap-[12px] py-[12px] px-[16px] rounded-[8px] text-[#515F78] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF] transition-colors duration-300"
          >
            <LayoutDashboard className="w-[18px] h-[18px]" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/tasks"
            className="flex flex-row items-center gap-[12px] py-[12px] px-[16px] rounded-[8px] text-[#515F78] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF] transition-colors duration-300"
          >
            <ListTodo className="w-[18px] h-[18px]" />
            <p>Tasks</p>
          </NavLink>
          <NavLink
            to="/wallet"
            className="flex flex-row items-center gap-[12px] py-[12px] px-[16px] rounded-[8px] text-[#515F78] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF] transition-colors duration-300"
          >
            <Wallet className="w-[18px] h-[18px]" />
            <p>Wallet</p>
          </NavLink>
          <NavLink
            to="/notifications"
            className="flex flex-row items-center gap-[12px] py-[12px] px-[16px] rounded-[8px] text-[#515F78] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF] transition-colors duration-300"
          >
            <Bell className="w-[18px] h-[18px]" />
            <p>Notifications</p>
          </NavLink>
        </section>
      </div>
    );
};
export default SideBar;