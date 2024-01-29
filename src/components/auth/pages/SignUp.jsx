
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {signUpService} from "../../../services/auth.services";
import AlertSignUp from "../components/alertSignUp";
import FooterSignUp from "../components/footerSignUp";

function SignUp() {
  const userRef = useRef();
  const navigate = useNavigate();
  const [logInfo, setLogInfo] = useState({
    invalidUser: false,
    error: false,
  });
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  //To handle the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.password2) {
      setShowPasswordWarning(true);
      return;
    }
    setShowPasswordWarning(false);
    let res = await signUpService({ ...form });
    if (res == 201) {
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: false,
        error: false,
      }));
      console.log("Deberia redireccionar:")
      navigate("/main");
    } else if (res == 400) {
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: true,
        error: false,
      }));
    } else {
      console.log(res)
      console.log("Else del signup")
      setLogInfo((logInfo) => ({
        ...logInfo,
        invalidUser: false,
        error: true,
      }));
    }
    //!TODO: Guardar datos de usuario (Redux o Context) o usar JWT para autenticar.
    //window.location = "/login";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="container m-10 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-slate-800 px-6 py-8 rounded-xl shadow-md text-black w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
            required
            ref={userRef}
            value={form.fullName}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password2"
            placeholder="Confirm Password"
            required
            value={form.password2}
            onChange={handleChange}
          />
          {showPasswordWarning && (
            <p className="text-red-500 text-xs italic text-center p-1 mb-2">
              Passwords do not match.
            </p>
          )}
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
            rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Create Account
          </button>
          <AlertSignUp
            className="text-center p-2 m-2"
            invalidUser={logInfo.invalidUser}
            error={logInfo.error}
          />
          <FooterSignUp />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
