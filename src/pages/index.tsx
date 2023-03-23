import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";

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
      </main>
    </>
  );
};

export default Home;
