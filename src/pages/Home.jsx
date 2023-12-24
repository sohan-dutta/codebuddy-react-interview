import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [stepNo, setStepNo] = useState(1);

  const back = () => {
    if (stepNo > 1) setStepNo(stepNo - 1);
  };

  const saveAndNext = () => {
    console.log("hello");
    if (stepNo < 3) setStepNo(stepNo + 1);
  };

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 flex items-center text-4xl font-bold">
        <Icon icon="mdi:home" className="mr-2" />
        Home
      </h1>

      <h2 className="mb-3 text-2xl">Welcome to the home page!</h2>

      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        {(() => {
          switch (stepNo) {
            case 1:
              return (
                <>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Username</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                    <input
                      className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </>
              );
            case 2:
              return (
                <>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">First Name</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Last Name</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Address</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                </>
              );
            case 3:
              return (
                <>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Country Code
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Accept Terms and Conditions
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                </>
              );
            default:
              return <></>;
          }
        })()}
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => back()}
          >
            Back
          </button>
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => saveAndNext()}
          >
            Next
          </button>
        </div>
      </form>

      <Link to="/posts" className="flex items-center text-blue-600 hover:underline">
        Posts
        <Icon icon="mdi:arrow-right" className="ml-2" />
      </Link>
    </div>
  );
};

export default Home;
