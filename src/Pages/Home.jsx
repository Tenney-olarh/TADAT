import { EarningsChart } from "@/Components/HomePage/EarningChart";
import SideBar from "../Components/HomePage/SideBar"
const home = () => {
  return (
    <div>
      <SideBar/>
          <EarningsChart/>
    </div>
  );
};
export default home;
