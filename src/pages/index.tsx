import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Image from "next/image";
import RoomsSvgComponent from "@/components/svgs/room";
import Countdown from "@/components/countdown";

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
          className="-z-5 relative h-screen overflow-hidden"
        >
          <RoomsSvgComponent className=" -ml-[142%] h-screen w-auto sm:-ml-[60%] md:-ml-[40%]  lg:-ml-[20%] xl:-ml-[7%]   " />
        </div>

        <Countdown />
      </main>
    </>
  );
};

export default Home;
