import { MdOutlineGroups3 } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineNoFood } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";

const Rules = () => {
  const perks = [
    {
      icon: (
        <MdOutlineGroups3
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "Group size",
      desc: "Grab 1 to 5 of your bravest buds for this adventure!",
    },
    {
      icon: (
        <FaChild className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Age restriction",
      desc: "Sorry kiddos, you must be at least 16 years old to join in on the fun.",
    },
    {
      icon: (
        <BsAlarm className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Time limit",
      desc: "Can you beat the clock? You only have 60 minutes to escape!",
    },
    {
      icon: (
        <AiOutlineSafety
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "Safety rules",
      desc: "Let's keep it safe and sane - no running, jumping, or breaking stuff, and no bringing in any outside tools or toys.",
    },
    {
      icon: (
        <BsSearch className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Clue system",
      desc: "If you get stuck, don't worry! We've got your back with our handy walkie-talkie clue system.",
    },
    {
      icon: (
        <RiAdminLine className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Game master",
      desc: "We've got our eyes on you! Our game master is keeping a watchful eye and can help you out if you need it.",
    },
    {
      icon: (
        <MdOutlineNoFood
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "Food and drinks",
      desc: "Let's keep the room clean - no food or drinks allowed inside.",
    },
    {
      icon: (
        <AiOutlineFieldTime
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "Late arrival policy",
      desc: "Don't be tardy to the party! If you're late, your game time may be shortened and you might have to wait for the next game.",
    },
    {
      icon: (
        <GiMoneyStack
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "Refund policy",
      desc: "Once the game starts, there's no turning back! No refunds, sorry!",
    },
  ];

  return (
    <section
      id="rules"
      data-scroll-section
      className="h-screen w-screen text-white transition-colors duration-500"
    >
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#fa1c16" offset="0%" />
          <stop stopColor="#800e0b" offset="50%" />
          <stop stopColor="#fa1c16" offset="100%" />
        </linearGradient>
      </svg>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-28">
        <div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <a
                key={index}
                className="block rounded-xl border border-red-500 p-8 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-red-500 hover:shadow-red-500/25"
              >
                <div
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1"
                  data-scroll-delay={index * 0.1}
                >
                  {perk.icon}
                </div>
                <div
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1"
                  data-scroll-delay={index++ * 0.1}
                  className="mt-4 text-lg font-medium leading-6 text-gray-200"
                >
                  {perk.title}
                </div>
                <p
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1"
                  data-scroll-delay={index * 0.1}
                  className="mt-1 text-sm text-gray-200"
                >
                  {perk.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
