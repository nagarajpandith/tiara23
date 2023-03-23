import { RiTranslate } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { HiOutlineDocumentText, HiUserGroup } from "react-icons/hi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Rules = () => {
  const perks = [
    {
      icon: (
        <BsGlobe2 className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Multilingual Meeting Support",
      desc: "Our app allows users who speak different languages to communicate with each other. The app translates the text and speaks it out to other participants in the language they have selected.",
    },
    {
      icon: (
        <RiTranslate className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Real-time Translation",
      desc: "Our app provides real-time translation, so you can focus on the conversation without worrying about the language barrier. The translation is done quickly and accurately, ensuring smooth communication.",
    },
    {
      icon: (
        <HiOutlineDocumentText
          className="h-10 w-10"
          style={{ stroke: "url(#gradient)" }}
        />
      ),
      title: "Meeting Minutes",
      desc: "Our app automatically generates a summary of the entire meeting or conference. This feature saves time and helps ensure that all participants are on the same page.",
    },
    {
      icon: (
        <HiUserGroup className="h-10 w-10" style={{ fill: "url(#gradient)" }} />
      ),
      title: "Large Capacity",
      desc: "Our app can support up to 100 concurrent users. This means that even large meetings and conferences can be easily accommodated, making it ideal for businesses, schools, and other organizations.",
    },
    {
      icon: (
        <MdHighQuality
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "HQ video and Screen Sharing",
      desc: "Our app provides high-quality video and screen sharing, ensuring that everyone can see and hear each other clearly. This feature helps to ensure that the meeting is productive and engaging.",
    },
    {
      icon: (
        <BsFillBookmarkHeartFill
          className="h-10 w-10"
          style={{ fill: "url(#gradient)" }}
        />
      ),
      title: "User friendly Interface",
      desc: "Our app has a user-friendly interface that is easy to navigate. This ensures that everyone can participate in the meeting or conference without any technical difficulties, making it ideal for users of all skill levels.",
    },
  ];

  return (
    <section className="h-screen w-screen text-white transition-colors duration-500">
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
                className="border-red-500 hover:border-red-500 hover:shadow-red-500/25 block rounded-xl border p-8 shadow-xl transition-all duration-300 hover:scale-[1.05]"
              >
                <div>{perk.icon}</div>
                <div>{perk.title}</div>
                <p className="mt-1 text-sm text-gray-200">{perk.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
