import React from "react";
import "./buttonNav.css";

function ButtonNav(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="button-nav py-2 px-4 mx-.5 uppercase text-2xl"
        onClick={() => setShowModal(true)}
      >
        {props.text}
      </button>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <article className="has-border w-96 relative bg-gray-200 rounded-lg shadow animate-grow-once">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                    onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                 
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                    Sign in to Poll !
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                      >
                        Your pseudo
                      </label>
                      <input
                        name="pseudo"
                        id="pseudo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-1xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="My pseudo"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-1xl rounded-lg  block w-full p-2.5 "
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="create-button p-4 flex justify-end"
                    >
                      <p className="items-end">Login to your account</p>
                    </button>
                    <div className="text-2xl font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </article>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </>
  );
}

export default ButtonNav;
