
import { useState, useEffect, useRef } from "react";
import { createUser } from "../../../services/UserServices";
import AlertSignUp from "../components/alertSignUp";
import FooterSignUp from "../components/footerSignUp";

function SignUp() {
  const [logInfo, setLogInfo] = useState({
    logged: false,
    repeated: false,
    error: false,
  });
  const userRef = useRef();
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
    const res = await createUser({ ...form });
    //!TODO: Convertir esto a un modal o algo bonito.
    if (res.status === 201) {
      setLogInfo((logInfo) => ({
        ...logInfo,
        logged: true,
        repeated: false,
        error: false,
      }));
    } else if (res.status === 400) {
      setLogInfo((logInfo) => ({
        ...logInfo,
        repeated: true,
        error: false,
        logged: false,
      }));
    } else {
      setLogInfo((logInfo) => ({
        ...logInfo,
        error: true,
        logged: false,
        repeated: false,
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
            logged={logInfo.logged}
            repeated={logInfo.repeated}
            error={logInfo.error}
          />
          <FooterSignUp />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
