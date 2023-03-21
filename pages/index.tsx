//@ts-nocheck

import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  return (
    <>
      <NextSeo
        title="XSOMENOOB"
        description="Random polish kiddo"
      />
      <div className="px-3 py-6 mx-auto mt-12 text-center">
        <div>
          <h1
            id="title"
            className="text-5xl font-extrabold text-transparent sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r text-[#7F51D4]"
          >
            xsomenoob
          </h1>
          <p className="mt-6 text-xl max-w-[80%] ml-[10%] font-semibold text-center">
            random polish kiddo
          </p>
        </div>
      </div>
      <div className="mt-12">
        <div className=" max-w-[80%] mr-[10%] mx-auto grid items-center w-full grid-cols-1 gap-4 mt-6 mb-4 md:grid-cols-3">
          <a href="https://steamcommunity.com/profiles/76561199092873392" className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800 hover:bg-neutral-700 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="Steam"
                />
              </div>
              <p className="font-semibold text-md">Gamer</p>
            </div>
          </a>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800 hover:bg-neutral-700 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/html.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="HTML"
                />
              </div>
              <p className="font-semibold text-md">FrontEnd DEV</p>
            </div>
          </div>
          <a href="https://www.speedrun.com/user/xsomenoob" className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800 hover:bg-neutral-700 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="https://avatars.githubusercontent.com/u/11006616?s=280&v=4"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="Speedrun.com"
                />
              </div>
              <p className="font-semibold text-md">Speedrunner</p>
            </div>
          </a>
        </div>

        <div className="max-w-[80%] mr-[10%] mx-auto mt-12">
          <div className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800 text-center">
            <p className="ml-12 text-2xl font-extrabold">Contact&nbsp;me</p>
            <br></br>
            <p className="inline-flex ml-2 mt-2 text-lg md:ml-12">
              Discord:&nbsp;
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r text-[#7F51D4]">
                xsomenoob#1111
              </span>
            </p>
            <br></br>
            <p className="inline-flex ml-2  text-lg md:ml-12">
              E-Mail:&nbsp;
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r text-[#7F51D4]">
                microxsomenoob@gmail.com
              </span>
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
