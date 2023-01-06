import { NextSeo } from "next-seo";
import Image from "next/image";
import { Code, Mail } from "react-feather";

export default function Home() {
  return (
    <>
      <NextSeo
        title="OlekAleksander.pl - Home"
        description="Im a fullstack programmer from Poland. I build fullstack apps using
        nextjs and react with tailwind. I also like to design stuff."
      />
      <div className="px-3 py-6 mx-auto mt-12 text-center">
        <div>
          <h1 className="text-5xl font-extrabold text-transparent sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            OlekAleksander
          </h1>
          <p className="mt-6 text-xl max-w-[80%] ml-[10%] font-semibold text-center">
            Im a fullstack programmer from Poland. I build fullstack apps using
            nextjs and react with tailwind. I also like to design stuff.
          </p>
        </div> 
      </div>
      <div className="mt-12">
        <p className="inline-flex ml-12 mr-4 text-2xl font-extrabold text-center">
          My&nbsp;
          <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            skills
          </p>
        </p>

        <div className=" max-w-[80%] mr-[10%] mx-auto grid items-center w-full grid-cols-1 gap-4 mt-6 mb-4 md:grid-cols-3">
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  alt="Linux"
                  src="/imgs/linux.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                />
              </div>
              <p className="font-semibold text-md">Linux</p>
            </div>
          </div>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/github.svg"
                  className="rounded-sm invert "
                  width="24"
                  height="24"
                  alt="Github"
                />
              </div>
              <p className="font-semibold text-md">GitHub</p>
            </div>
          </div>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/tailwindcss.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="Tailwind"
                />
              </div>
              <p className="font-semibold text-md">Tailwind</p>
            </div>
          </div>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/typescript.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="Typescript"
                />
              </div>
              <p className="font-semibold text-md">TypeScript</p>
            </div>
          </div>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/nodejs.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="NodeJS"
                />
              </div>
              <p className="font-semibold text-md">NodeJS</p>
            </div>
          </div>
          <div className="w-full p-4 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center h-[26px]">
                <Image
                  src="/imgs/python.svg"
                  className="rounded-sm"
                  width="24"
                  height="24"
                  alt="Python"
                />
              </div>
              <p className="font-semibold text-md">Python</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="inline-flex ml-12 mr-4 text-2xl font-extrabold text-center">
          Things that i&nbsp;
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            worked on
          </span>
        </p>

        <div className=" max-w-[80%] mr-[10%] mx-auto grid items-center w-full grid-cols-1 gap-4 mt-6 mb-4 md:grid-cols-3">
          <a target="_blank" rel="noreferrer" href="https://nitronodes.xyz" className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="mt-8 flex justify-center items-center h-[26px]">
              <Image
                alt="NitroNodes"
                src="/logos/nitronodes.png"
                className="rounded-sm"
                width="96"
                height="96"
              />
            </div>
            <p className="mt-12 mr-2 text-xl font-bold text-center">
              NitroNodes
            </p>
            <p className="mt-2 mr-2 font-semibold text-center text-md">
              Freemium 24/7 hosting service
            </p>
          </a>
          <a target="_blank" rel="noreferrer" href="https://heyhosting.pl" className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="mt-8 flex justify-center items-center h-[26px]">
              <Image
                alt="HeyHosting"
                src="/logos/heyhosting.png"
                className="rounded-sm"
                width="96"
                height="96"
              />
            </div>
            <p className="mt-12 mr-2 text-xl font-bold text-center">
              HeyHosting
            </p>
            <p className="mt-2 mr-2 font-semibold text-center text-md">
              Paid polish server hosting
            </p>
          </a>
          <div className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300">
            <div className="mt-8 flex justify-center items-center h-[26px]">
              <Image
                alt="LemonTools"
                src="/logos/lemontools.png"
                className="rounded-sm"
                width="96"
                height="96"
              />
            </div>
            <p className="mt-12 mr-2 text-xl font-bold text-center">
              LemonTools
            </p>
            <p className="mt-2 mr-2 font-semibold text-center text-md">
              Powerful cheating software
            </p>
          </div>
        </div>
        <p className="inline-flex m-auto ml-12 text-2xl font-extrabold text-center">
          Contact&nbsp;
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
          me
          </span>
        </p>
        <div className="max-w-[80%] mr-[10%] mx-auto mt-12">
          <div className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:text-gray-300">
            <p className="inline-flex ml-2 mr-4 text-lg md:ml-12">Discord:&nbsp;<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">OlekAleksander#5599</span></p><br></br>
            <p className="inline-flex ml-2 mr-4 text-lg md:ml-12">E-Mail:&nbsp;<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">OlekAleksander@protonmail.com</span></p><br></br>
            <p className="inline-flex ml-2 mr-4 text-lg md:ml-12">Telegram:&nbsp;<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">@OlekAleksander</span></p><br></br>
          </div>
        </div>
      </div>
    </>
  );
}
