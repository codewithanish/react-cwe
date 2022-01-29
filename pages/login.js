import { TerminalIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center shadow-lg p-8 rounded-lg px-36">
        <h1 className="text-slate-700 font-bold text-[2.7rem]">Login</h1>
        <div className="rounded-full shadow-md border-2 p-2 mt-6">
          <TerminalIcon className="text-slate-700 w-[4rem] h-[4rem]" />
        </div>
        <div>
          <input
            placeholder="Email"
            className="font-sans block text-sm leading-5 w-full py-2 px-3 border-2 border-green-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-200 focus:border-green-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:border-green-500 dark:focus:ring-green-600 dark:focus:border-green-600"
          />
          <input
            placeholder="Password"
            className="font-sans block text-sm leading-5 w-full mt-6 py-2 px-3 border-2 border-green-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-200 focus:border-green-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:border-green-500 dark:focus:ring-green-600 dark:focus:border-green-600"
          />
          <Link href="/">
            <a onClick={(e) => handleClick(e, "/")}>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
