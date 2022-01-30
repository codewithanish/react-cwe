import { TerminalIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Login() {
  return (
    <body className="h-screen dark:bg-slate-800">
      <div className="mx-auto h-full flex justify-center items-center">
        <div className="light:shadow-lg rounded-md bg-slate-900 p-8 shadow-xl w-3/5">
          <h1 className="font-bold text-3xl mb-10">Register</h1>
          <div className="p-4">
            <div className="mb-4">
              <label className="font-bold">Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Password</label>
            </div>
            <div>
              <button>Login</button>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div>
            <p>
              Already have an account <a href="/login">Login</a>.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
