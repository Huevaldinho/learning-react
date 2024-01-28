import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { loginService } from "../../../services/UserServices";
import FooterLogin from "../components/footerLogin";
import AlertLogin from "../components/alertLogin";

function Login() {
  const userRef = useRef();
  const navigate = useNavigate();
  const [logInfo, setLogInfo] = useState({
    invalidUser: false,
    error: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  //When the component loads, focus the email input.
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //To handle the form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent the page to refresh when clicking the button
    //Use a module to handle the login session?
    //Use an API to compare with the db
    console.log("Submited");
    let statusResponse = await loginService(email, password);
    if (statusResponse === 200) {
      setEmail("");
      setPassoword("");
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: false,
        error: false,
      }));
      navigate("/main");
    } else if (statusResponse === 401) {
      console.log("Wrong credentials");
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: true,
        error: false,
      }));
    } else if (statusResponse === 500) {
      console.log("Server error");
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: false,
        error: true,
      }));
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-slate-800 px-6 py-8 rounded-xl shadow-md text-black w-full"
          onSubmit={handleSubmit}
        >
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
            Login
          </button>
          <AlertLogin
            className="text-center p-2 m-2"
            invalidUser={logInfo.invalidUser}
            error={logInfo.error}
          />
          <FooterLogin />
        </form>
      </div>
    </div>
  );
}

/*
  Template from:https://tailwind-elements.com/docs/standard/components/login-form/
*/
export default Login;
