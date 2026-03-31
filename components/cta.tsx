"use client";

import Link from "next/link";
import Container from "./layout/container";

export default function CTA() {
  return (
    <section id="cta" className="py-24">

      <Container>

        <h2 className="text-center mb-16 text-sm tracking-wide text-black font-bold flex items-center justify-center gap-3">
          <span className="w-2 h-2 bg-black rounded-full" />
          LET'S CREATE SOMETHING AWESOME
          <span className="w-2 h-2 bg-black rounded-full" />
        </h2>

        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">

          <div
            className="w-full max-w-[28rem] bg-black rounded-3xl p-16 flex flex-col items-center justify-between md:h-[min(36vw,calc(100dvh-20rem))] md:max-w-[min(44vw,calc((100dvh-20rem)*1.18))]"
            data-cursor-theme="dark"
          >

            <h3 className="text-4xl md:text-5xl text-[#FFFAF0] font-bold text-center">
              join our team
            </h3>

            <Link
              href="/contact-us/careers"
              className="group mt-16 w-60 h-60 flex items-center justify-center rounded-full bg-[#FFFAF0] text-black text-sm transition-all duration-500 ease-out hover:scale-110 hover:bg-blue-600 hover:text-white hover:font-bold hover:text-xl"
            >
              <span className="transition-all duration-300 group-hover:tracking-wider">
                CHECK CAREERS
              </span>
            </Link>

          </div>

          <div
            className="w-full max-w-[28rem] bg-black rounded-3xl p-16 flex flex-col items-center justify-between md:h-[min(36vw,calc(100dvh-20rem))] md:max-w-[min(44vw,calc((100dvh-20rem)*1.18))]"
            data-cursor-theme="dark"
          >

            <h3 className="text-4xl md:text-5xl text-[#FFFAF0] font-bold text-center">
              start <br /> a project
            </h3>

            <Link
              href="/contact-us"
              className="group mt-16 w-60 h-60 flex items-center justify-center rounded-full bg-[#FFFAF0] text-black text-sm transition-all duration-500 ease-out hover:scale-110 hover:bg-green-600 hover:text-white hover:font-bold hover:text-xl"
            >
              <span className="transition-all duration-300 group-hover:tracking-wider">
                CONTACT US
              </span>
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}
