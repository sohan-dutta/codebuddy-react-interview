import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [stepNo, setStepNo] = useState(1);
  const [maxStepNo, setMaxStepNo] = useState(1);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [atac, setATAC] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (maxStepNo < stepNo) setMaxStepNo(stepNo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepNo]);

  const back = () => {
    if (stepNo > 1) setStepNo(stepNo - 1);
  };

  const showTab = (num) => {
    if (num <= maxStepNo) setStepNo(num);
  };

  const showErrorList = (errList) => {
    toast.error(
      <ul className="errors-list">
        {errList.map((msg) => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>,
    );
  };

  const save = async () => {
    const errList = [];
    switch (stepNo) {
      case 1:
        if (!/^[A-Z0-9_%+-](.[A-Z0-9_%+-]+)*@[A-Z0-9-]+(.[A-Z]{2,4})?$/i.test(emailId))
          errList.push("Email is invalid. Kindly provide valid email.");
        if (
          !/^(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*\d{2,})(?=.*[@$!%*#?&]{2,})[A-Za-z\d@$!%*#?&]{8,}$/.test(
            password,
          )
        ) {
          errList.push(
            "Password should contain atleast 8 characters. It should also contain atleast 2 capital letters, 2 small letters, 2 digits, 2 special characters.",
          );
        }
        if (errList.length) showErrorList(errList);
        else toast.success("Data saved!");
        return !errList.length;
      case 2:
        if (!/^[a-zA-Z]{2,50}$/.test(firstName)) {
          errList.push(
            "First Name cannot be empty and can only have alphabets; minimum 2 and maximum 50.",
          );
        }
        if (lastName && !/^[a-zA-Z]+$/.test(lastName))
          errList.push("Last Name can only have alphabets.");
        if (!/^.{10,}$/.test(address))
          errList.push("Address is required, and it should contain minimum 10 characters.");
        if (errList.length) showErrorList(errList);
        else toast.success("Data saved!");
        return !errList.length;
      case 3:
        if (!countryCode) {
          errList.push("Please select a country code.");
        }
        if (!/^\d{10}$/.test(phoneNumber))
          errList.push("Phone Number should have exactly 10 digits.");
        if (!atac) errList.push("Please accept the terms and conditions.");
        if (errList.length) showErrorList(errList);
        else {
          toast.success("Details sent successfully.");
          const resp = await fetch("https://codebuddy.review/submit", {
            method: "POST",
            body: JSON.stringify({
              emailId,
              password,
              firstName,
              lastName,
              address,
              countryCode,
              phoneNumber,
            }),
          });
          resp.json().then(
            (data) => {
              console.log(data);
              navigate("/posts");
            },
            (err) => {
              console.err("POST API SEND ERROR:", err);
            },
          );
        }
    }
  };

  const saveAndNext = async () => {
    if (stepNo < 3) {
      if (save()) setStepNo(stepNo + 1);
    }
  };

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 flex items-center text-4xl font-bold">
        <Icon icon="mdi:home" className="mr-2" />
        Home
      </h1>

      <h2 className="mb-3 text-2xl">Welcome to the home page!</h2>

      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <ul className="flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
          {[1, 2, 3].map((num) => (
            <li key={num} className="me-2">
              <a
                href="#"
                className={
                  "inline-block rounded-t-lg p-4" +
                  (num > maxStepNo
                    ? " elem-disabled"
                    : num == stepNo
                      ? " bg-blue-600 text-white"
                      : " hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300")
                }
                onClick={() => showTab(num)}
              >
                Step {num}
              </a>
            </li>
          ))}
        </ul>
        {(() => {
          switch (stepNo) {
            case 1:
              return (
                <>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Email</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      type="text"
                      placeholder="Email ID"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                    <input
                      className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      type="Password"
                      placeholder="******************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Last Name</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Address</label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                      <option value="">Select...</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+91">India (+91)</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      value={atac}
                      onChange={(e) => setATAC(e.target.value)}
                    />
                    <label className="block text-sm font-bold text-gray-700">
                      Accept Terms and Conditions
                    </label>
                  </div>
                </>
              );
            default:
              return <></>;
          }
        })()}
        <div className="flex items-center justify-end">
          <button
            className={
              "focus:shadow-outline bg-white-500 rounded px-4 py-2 font-bold text-blue-700 focus:outline-none" +
              (stepNo == 1 ? " elem-disabled" : "")
            }
            type="button"
            onClick={() => back()}
          >
            Back
          </button>
          <button
            className="focus:shadow-outline ml-1 mr-1 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => save()}
          >
            Save
          </button>
          <button
            className={
              "focus:shadow-outline bg-white-500 rounded px-4 py-2 font-bold text-blue-500 hover:bg-blue-700 hover:text-white focus:outline-none" +
              (stepNo == 3 ? " elem-disabled" : "")
            }
            type="button"
            onClick={() => saveAndNext()}
          >
            Save and Next
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Home;
