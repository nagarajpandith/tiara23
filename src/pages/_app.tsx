import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const containerRef = useRef(null);
  return (
    <SessionProvider session={session}>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
