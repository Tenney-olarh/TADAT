import { EarningsChart } from "@/Components/HomePage/EarningChart";
const home = () => {
  return (
    <div className="px-10">
      <h1>Dashboard</h1>
          <p>Welcome to the Dashboard!</p>
          <EarningsChart/>
    </div>
  );
};
export default home;
