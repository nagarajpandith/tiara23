import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Image from "next/image";
import RoomsSvgComponent from "@/components/svgs/room";

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
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#191238] to-[#4d3e6a]">
        <Navbar />
       <div className="relative h-screen -z-5 overflow-hidden">

       <RoomsSvgComponent className=" -ml-[142%] sm:-ml-[60%] md:-ml-[40%] lg:-ml-[20%] xl:-ml-[7%]  w-auto h-screen   " />
       </div>
  
        
      </main>
    </>
  );
};

export default Home;
