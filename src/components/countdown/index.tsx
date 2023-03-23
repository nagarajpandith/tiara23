import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import { useEffect, useState, type FC } from "react";

const Countdown: FC = () => {
  const endDate = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);

  const calculateCountdown = () => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [rotation, setRotation] = useState("rotate-0");

  useEffect(() => {
    const rot = `${-(countdown.seconds * 6) % 360}deg`;
    setRotation(rot);
  }, [countdown.seconds]);

  return (
    <>
      <div
        data-scroll-section
        className="flex w-full flex-col items-center justify-center lg:mt-0"
      >
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="9"
          className="outline-title mt-5 whitespace-nowrap text-center text-9xl font-extrabold text-transparent opacity-50"
        >
          Race against the clock!
        </h1>
      </div>

      <div
        data-scroll-section
        className="relative mt-[20vh] flex flex-col items-start justify-center gap-5 p-10 text-white drop-shadow-xl sm:items-center lg:flex-row lg:gap-10"
      >
        <Image
          src={"/chakra.png"}
          width={500}
          height={500}
          alt="Ship Helm"
          className="absolute opacity-10"
          style={{
            transform: `rotate(${rotation})`,
          }}
        />

        <div
          className="flex items-end"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="5"
        >
          <a
            className={`${titleFont.className} w-[60px] text-4xl font-extrabold lg:text-7xl`}
          >
            {countdown.hours}
          </a>
          <span className="ml-2 text-xl">Hours</span>
        </div>

        <div
          className="flex items-end"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="5"
        >
          <a
            className={`${titleFont.className} w-[100px] text-4xl font-extrabold lg:text-7xl`}
          >
            {countdown.minutes}
          </a>
          <span className="ml-2 text-xl">Minutes</span>
        </div>

        <div
          className="flex items-end"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="5"
        >
          <a
            className={`${titleFont.className} w-[100px] text-4xl font-extrabold lg:text-7xl`}
          >
            {countdown.seconds}
          </a>
          <span className="ml-2 text-xl">Seconds</span>
        </div>
      </div>

      <div
        data-scroll-section
        className="flex w-full flex-col items-center justify-center lg:mt-0"
      >
        <h1
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="9"
          className="whitespace-nowrap text-center text-xl font-extrabold text-white"
        >
          One hour to escape before the final cataclysmic event.
        </h1>
      </div>
    </>
  );
};

export default Countdown;
