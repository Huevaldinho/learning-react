import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { createUser } from "../services/UserServices";

function SignUp() {

  const userRef = useRef();
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [form, setForm] = useState({
    fullName: null,
    email: null,
    password: null,
    password2: null
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
    const res = await createUser( { ...form });
    //!TODO: Convertir esto a un modal o algo bonito.
    if (res.status===201){
      alert("User created successfully");
    }else if (res.status===400){
      alert("User already exists");
    }else{
      alert("Something went wrong");
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

          <div className="text-center text-sm text-white mt-4">
            By signing up, you agree to the&nbsp;
            <Link
              className="no-underline border-b border-grey-dark text-white hover:text-blue-500"
              to="#"
            >
              Terms of Service
            </Link>{" "}
            and&nbsp;
            <a
              className="no-underline border-b border-grey-dark text-grey-dark hover:text-blue-500"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-white mt-6 text-center">
            Already have an account?&nbsp;
            <Link
              className="underline border-b border-blue text-blue hover:text-blue-500 text-white"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
