import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-800 w-screen h-screen overflow-hidden overflow-y-scroll">
      <Navbar />
      <div className="flex flex-col items-center text-center md:flex-row md:justify-center mt-8">
        <div className="md:text-left ml-8">
          <h1 className="text-slate-800 dark:text-white font-bold text-4xl mt-8 mb-6">
            Code With Ease
          </h1>
          <h2 className="text-slate-800 dark:text-white/90 font-bold text-3xl mb-6">
            Learn To Code For Free
          </h2>
          <p className="text-slate-600 dark:text-white/60 mt-9 w-9/12 text-left hidden md:block">
            Learn to code quickly with our amazing tutorials, challenges and
            exersizes
          </p>
          <button className="bg-[#00BFA6] text-white font-semibold px-20 py-1 rounded-xl mt-8 hidden md:block">
            Sign Up!
          </button>
        </div>
        <div className="md:mr-8">
          <Image src="/HeroImage.svg" width={200} height={200} />
        </div>
        <p className="text-slate-600 dark:text-white/60 mt-9 w-9/12 text-center md:hidden">
          Learn to code quickly with our amazing tutorials, challenges and
          exersizes
        </p>
        <button className="bg-[#00BFA6] text-white font-semibold px-20 py-1 rounded-xl mt-8 md:hidden">
          Sign Up!
        </button>
      </div>
      <div className="mt-20 w-full flex flex-col items-center">
        <h1 className="text-slate-800 dark:text-white/90 text-[1.9rem] font-semibold">
          Lets Start Learning!
        </h1>
        <p className="text-slate-600 dark:text-white/60 mt-3">
          Master popular and in-demand topics
        </p>
        <div>
          <div className="flex shadow-lg rounded-2xl bg-white p-4 font-bold text-slate-800">
            <h3>Web Development Course</h3>
            <p>Start Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
