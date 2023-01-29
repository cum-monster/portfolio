import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, BarChart } from "react-feather";
import Home from "../pages";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="relative z-50 bg-neutral-800/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 duration-300 ease-in-out border-b-2 border-none md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">OlekAleksander</span>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
                  OA
                </p>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <button
                type="button"
                className="p-2 font-bold text-white translate-x-2 bg-transparent rounded-md"
                aria-expanded="false"
                onClick={() => {
                  setMobileMenuOpen(true);
                }}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="mr-4 text-neutral-200" />
              </button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              <Link
                href="/"
                className="text-base font-medium text-white duration-300 bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 hover:text-transparent"
              >
                Home
              </Link>
              {/* <Link
                                href="/blog/posts"
                                className="text-base font-medium text-white duration-300 bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 hover:text-transparent"
                            >
                                Blog
                            </Link> */}
              <Link
                href="https://github.com/OlekAleksander"
                target="_blank"
                className="text-base font-medium text-white duration-300 bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 hover:text-transparent"
              >
                Github
              </Link>
            </nav>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={
            mobileMenuOpen
              ? "absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
              : "hidden"
          }
        >
          <div>
            <div className="text-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-neutral-800 divide-neutral-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
                      OA
                    </p>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="inline-flex items-center justify-center p-2 bg-transparent rounded-md text-neutral-400 hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="text-neutral-200 " />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <div className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-700">
                      <Link
                        onClick={() => {
                          setMobileMenuOpen(false);
                        }}
                        className="w-full h-full"
                        href="/"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Home
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-700">
                      <Link
                        onClick={() => {
                          setMobileMenuOpen(false);
                        }}
                        href="https://github.com/OlekAleksander"
                        target="_blank"
                        className="w-full h-full"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Github
                        </span>
                      </Link>
                    </div>
                    {/* <div className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-700">
                                        <Link
                                            onClick={() => {
                                                setMobileMenuOpen(false)
                                            }}
                                            href="/blog/posts"
                                            className="w-full h-full"
                                        >
                                            <span className="ml-3 text-base font-medium text-white">Blog</span>
                                        </Link>
                                        </div> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
