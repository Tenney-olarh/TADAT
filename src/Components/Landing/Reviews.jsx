import Shina from "../../assets/shina.png";
import Okolie from "../../assets/okolie.png";
import Chidi from "../../assets/chidi.png";

const reviews = [
  {
    avatar: Shina,
    name: "Shina",
    role: "Freelancer",
    quote:
      "The transparency is what sold me. I know exactly how much each action is worth. A truly modern diagnostic tool for my wallet.",
  },
  {
    avatar: Okolie,
    name: "Annette Okolie",
    role: "Graduate",
    quote:
      "Best decision I've made for my digital life. No more expensive data plans that I have to pay for out of pocket.",
  },
  {
    avatar: Chidi,
    name: "Chidi Okechukwu",
    role: "Student",
    quote:
      "TADAT has literally covered my monthly data costs just by engaging in tasks I already do on a daily basis. It's effortless.",
  },
];

const ReviewCard = ({ avatar, name, role, quote }) => (
  <article className="flex min-h-[186px] w-full flex-col rounded-[8px] bg-[#FFFFFF] p-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
    <div className="flex items-center gap-2">
      <img
        src={avatar}
        alt=""
        aria-hidden="true"
        className="h-12 w-12 shrink-0 rounded-[8px] object-cover"
      />
      <div className="min-w-0">
        <h3 className="text-[16px] font-medium leading-tight tracking-[0%] text-[#000000]">
          {name}
        </h3>
        <p className="text-[14px] leading-tight tracking-[0%] text-[#000000]">
          {role}
        </p>
      </div>
    </div>

    <p className="mt-6 text-[15px] italic leading-relaxed tracking-[0%] text-[#000000] sm:text-[16px]">
      {quote}
    </p>
  </article>
);

const Reviews = () => {
  return (
    <section className="w-full bg-[#F5F8FF] px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
      <h2 className="mx-auto max-w-[720px] text-center text-[26px] font-medium leading-tight tracking-[0%] text-[#000000] sm:text-[32px] lg:text-[36px]">
        Backed by a growing community of 1,000+ Users
      </h2>

      <div className="mx-auto mt-8 grid w-full max-w-[1240px] gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
