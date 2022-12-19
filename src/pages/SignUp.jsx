import { Link } from "react-router-dom";

function SignUp() {
  //Tomado de: https://tailwindcomponents.com/component/sign-up-form
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

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
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
            rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the&nbsp;
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark hover:text-sky-500"
              to="#"
            >
            Terms of Service
            </Link>{" "}
            and&nbsp;
            <a
              className="no-underline border-b border-grey-dark text-grey-dark hover:text-sky-500"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?&nbsp;
          <Link
            className="underline border-b border-blue text-blue hover:text-blue-500"
            to="/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
