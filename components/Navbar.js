import { TerminalIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Home() {
  const pages = [
    { name: "Home", url: "/", isActive: true },
    { name: "Courses", url: "/", isActive: false },
    { name: "Challenges", url: "/", isActive: false },
    { name: "More", url: "/", isActive: false },
  ];

  const [isLoggedIn, logIn] = useState(false);

  return (
    <nav className="bg-white border-b-2 light:border-bg-gray-700 px-2 sm:px-4 py-2.5 dark:bg-slate-900 w-full">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-9"
            viewBox="0 0 20 20"
            fill="#00BFA6"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            CWE
          </span>
        </a>
        <input
          placeholder="Search"
          className="shadow-md grow mx-9 xl:mx-32 hidden md:block rounded-lg px-[0.28rem] py-[0.3rem] text-sm font-semibold leading-5 ring-offset-2 ring-[#00BFA6] focus:ring-4 outline-none"
        />
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-[#00BFA6] rounded md:bg-transparent md:text-[#00BFA6] md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-cool-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-cool-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Challenges
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#00BFA6] text-white rounded-lg px-2 py-1"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
