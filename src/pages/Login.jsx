import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Login() {
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  //When the component loads, focus the email input.
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //To handle the form submit
  const handleSubmit = async (e)=>{
    e.preventDefault(); //Prevent the page to refresh when clicking the button
    //Use a module to handle the login session?
    //Use an API to compare with the db
    console.log('Submited')
    setEmail('')
    setPassoword('')
  }
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form className="bg-slate-800 px-6 py-8 rounded-xl shadow-md text-black w-full"
              onSubmit={handleSubmit}>
          <h1 className="mb-8 text-3xl text-center text-white">Login</h1>
          <label htmlFor="email" className="text-white mb-1">
            Email:
          </label>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 mt-1"
            id="email"
            placeholder="Email"
            ref={userRef}
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="passoword" className="text-white mb-1">
            Password:
          </label>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 mt-1"
            id="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => {
              setPassoword(e.target.value);
            }}
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
