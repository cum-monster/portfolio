import Image from "next/image"

export default function Posts(){
    return(
        <>
        <div className=" max-w-[80%] mr-[10%] mx-auto grid items-center w-full grid-cols-1 gap-4 mt-6 mb-4 md:grid-cols-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nitronodes.xyz"
            className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300"
          >
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://heyhosting.pl"
            className="w-full p-8 text-white transition-all duration-200 rounded-lg shadow-lg bg-neutral-800/50 hover:bg-neutral-700/50 hover:text-gray-300"
          >
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
        </>
    )
}