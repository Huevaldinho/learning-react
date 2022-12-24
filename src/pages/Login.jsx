import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form className="bg-slate-700 px-6 py-8 rounded-xl shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-white">Login</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
            rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-white mt-4">
            By signing up, you agree to the&nbsp;
            <Link
              className="no-underline border-b border-grey-dark text-white hover:text-blue-500"
              to="#"
            >
              Terms of Service
            </Link>{" "}
            and&nbsp;
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark hover:text-blue-500"
              to="#"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-white mt-6 text-center">
            Don't have an account?&nbsp;
            <Link
              className="underline border-b border-blue text-blue hover:text-blue-500 text-white"
              to="/signUp"
            >
              Sign Up
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

/*
  Template from:https://tailwind-elements.com/docs/standard/components/login-form/
*/
export default Login;
