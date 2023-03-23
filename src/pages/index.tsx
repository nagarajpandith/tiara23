import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import RoomsSvgComponent from "@/components/svgs/room";
import Countdown from "@/components/countdown";
import Rules from "@/components/rule";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Last Stand</title>
        <meta
          name="description"
          content="The last stand - Tiara, SJEC, Vamanjoor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-[300vh] flex-col bg-gradient-to-b from-[#191238] to-[#4d3e6a]">
        <Navbar />
        <div
          data-scroll-section
          data-scroll-target="#home"
          className="-z-5 relative h-screen overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-center">
            <h1
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="5"
              className="heading text-4xl font-bold text-white md:text-6xl lg:text-8xl"
            >
              The Last Stand
            </h1>
            <p
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
              className="tagline text-sm text-white md:text-xl lg:text-2xl"
            >
              Apocalyptic Escape Room
            </p>
          </div>
          <RoomsSvgComponent className=" -ml-[142%] h-screen w-auto sm:-ml-[60%] md:-ml-[40%]  lg:-ml-[20%] xl:-ml-[7%]   " />
        </div>

        <Countdown />

        <Rules />
      </main>
    </>
  );
};

export default Home;
