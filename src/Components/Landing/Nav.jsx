import NavLogs from "../../assets/logsNav.png";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <div className="flex items-center justify-between px-10 py-5 h-[79px] bg-[#FFFFFF] fixed inset-x-0 top-0 z-50 shadow-md">
        <section>
          <Link to="/">
            <img src={NavLogs} alt="" className="h-[55px] w-[131.21px]" />
          </Link>
        </section>
        <section>
          <ul className="flex flex-row items-center gap-5 font-medium hover">
            <li>
              <a href="#home" className="hover:text-[#24A0D5] hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-[#24A0D5] hover:underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                to="/for-ads"
                className="hover:text-[#24A0D5] hover:underline"
              >
                For Advertisers
              </a>
            </li>
            <li>
              <a
                to="/about"
                className="hover:text-[#24A0D5] hover:underline"
              >
                About
              </a>
            </li>
          </ul>
        </section>
        <section className="flex items-center gap-5">
          <button className="w-[93px] h-[38px] font-medium cursor-pointer hover:bg-[#1C7CDF] hover:text-[#FFFFFF] rounded-[8px]">
            Login
          </button>
          <button className="w-[130px] h-[38px] rounded-[8px] bg-[#1C7CDF] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#1C7CDF]/80">
            Get Started
          </button>
        </section>
      </div>
    );
}
export default Nav;