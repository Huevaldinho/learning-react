function Navbar(props) {
  const divBtnContainer = "flex-shrink-0 rounded-xl  w-fit h-fit p-5";
  const btnSytle =
    "text-center w-full h-full shadow-2xl rounded-md hover:rounded-lg p-4";
  const handleClose = (e) => {
    e.preventDefault();
    // Reemplaza la entrada actual del historial y redirige a la página de inicio
    window.history.replaceState(null, null, "/login");
    window.location.href = "/login";
  };

  return (
    <div className="p-4 flex items-center justify-between border-red-800 rounded-xl bg-white">
      <div className={divBtnContainer}>
        <button className={"bg-sky-300 hover:bg-sky-500 " + btnSytle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      </div>{" "}
      <div className={divBtnContainer}>
        <button className={"bg-green-300 hover:bg-green-500 " + btnSytle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </button>
      </div>{" "}
      <div className={divBtnContainer}>
        <button
          className={"bg-red-300 hover:bg-red-500 " + btnSytle}
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
