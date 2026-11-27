import { Link } from "react-router-dom";
import User from "../../assets/Group 62.png";
import Task from "../../assets/qlementine-icons_task-16.png";
import Data from "../../assets/data.png";
import Advertisers from "../../assets/Group 64.png";
import Secure from "../../assets/Secure.png";
import Shield from "../../assets/Shield.png";
import Rename from "../../assets/Rename.png";

const userCards = [
  {
    icon: Task,
    title: "Simple Tasks",
    description:
      "Participate in quick surveys, engagement, and other tasks to build your data reward balance instantly.",
  },
  {
    icon: Data,
    title: "Instant Data Payouts",
    description:
      "Once you reach the minimum balance, simply initiate a withdrawal to claim your mobile data.",
  },
];

const advertiserPoints = [
  {
    icon: Secure,
    title: "Zero Bot Interaction",
    description:
      "Multi-layered verification ensuring 100% human profile engagement",
  },
  {
    icon: Shield,
    title: "Secure Protocol",
    description:
      "Task completion verification for ultimate campaign integrity",
  },
  {
    icon: Rename,
    title: "Real-time Analytics",
    description:
      "Deep insights into conversion paths and engagement metrics",
  },
];

const SectionHeading = ({ icon, children, to }) => {
  const content = (
    <>
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-[48px] w-[48px] shrink-0 rounded-[8px] object-cover"
      />
      <h2 className="text-[26px] font-medium leading-tight tracking-[0%] text-[#000000] sm:text-[30px] lg:text-[32px]">
        {children}
      </h2>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="flex items-center gap-2">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{content}</div>;
};

const FeatureCard = ({ icon, title, description }) => (
  <article className="flex min-h-[134px] overflow-hidden rounded-[8px] border border-[#24A0D5] bg-[#FFFFFF] transition-shadow hover:shadow-md">
    <span className="w-[10px] shrink-0 bg-[#24A0D5]" aria-hidden="true" />
    <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
      <img src={icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
      <h3 className="text-[20px] font-medium leading-tight tracking-[0%] text-[#000000] sm:text-[24px]">
        {title}
      </h3>
      <p className="text-[15px] font-medium leading-relaxed tracking-[0%] text-[#000000] sm:text-[16px]">
        {description}
      </p>
    </div>
  </article>
);

const AdvertiserPoint = ({ icon, title, description }) => (
  <li className="flex items-start gap-3">
    <img
      src={icon}
      alt=""
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 object-contain"
    />
    <div className="min-w-0">
      <h3 className="text-[18px] font-medium leading-tight tracking-[0%] text-[#000000] sm:text-[20px]">
        {title}
      </h3>
      <p className="text-[15px] font-normal leading-relaxed tracking-[0%] text-[#000000] sm:text-[16px]">
        {description}
      </p>
    </div>
  </li>
);

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full bg-[#EFF4FF] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
        <div className="flex w-full min-w-0 flex-col gap-5 lg:max-w-[498px]">
          <SectionHeading icon={User} to="/user">
            For Users
          </SectionHeading>

          <p className="max-w-[358px] text-[15px] font-normal leading-relaxed tracking-[0%] text-[#000000] sm:text-[16px]">
            Get your mobile data covered by completing simple tasks that value
            your attention and time
          </p>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {userCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-5 rounded-[10px] bg-[#DCE9FF] p-4 sm:p-5 lg:w-[529px] lg:shrink-0">
          <SectionHeading icon={Advertisers}>For Advertisers</SectionHeading>

          <div className="w-full rounded-[8px] bg-[#FFFFFF] p-4 sm:p-5">
            <p className="text-[19px] font-medium leading-snug tracking-[0%] text-[#000000] sm:text-[21px]">
              Get verified human engagement, transparent and secure
            </p>

            <ul className="mt-4 flex flex-col gap-4">
              {advertiserPoints.map((point) => (
                <AdvertiserPoint key={point.title} {...point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
