import { Link } from "react-router-dom";
function FooterSignUp() {
  return (
    <>
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
    </>
  );
}

export default FooterSignUp;
