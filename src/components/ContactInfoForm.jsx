import InputElement from "./InputElement";
import FormButtons from "./FormButtons";
import { useState, useContext, useMemo } from "react";
import { userContext } from "../utils/userContext";
import { mobileNumberRegex } from "../utils/constants";

/**
 * Country code dropdown component
 */
const CountryCodeDropdown = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="countryCode" className="mb-2 block font-semibold text-gray-700">
        Country Code
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        required
      >
        <option value="+91">India (+91)</option>
        <option value="+1">America (+1)</option>
      </select>
    </div>
  );
};

/**
 * Term checkbox component
 */
const TermsCheckbox = ({ acceptTerms, handleAcceptTermsChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="acceptTerms" className="mb-2 block font-semibold text-gray-700">
        Accept Terms and Conditions
      </label>
      <input
        type="checkbox"
        id="acceptTerms"
        name="acceptTerms"
        checked={acceptTerms}
        onChange={(e) => handleAcceptTermsChange(e.target.checked)}
        className="mr-2 h-4 w-4 leading-tight"
        required
      />
      <span className="text-gray-700">I accept the terms and conditions</span>
    </div>
  );
};

const contactInfoForm = ({ onBack, history }) => {
  const { user, updateUser } = useContext(userContext);
  const [phoneNo, setPhoneNo] = useState(user.phoneNumber);
  const [isPhoneNoValid, setIsPhoneNoValid] = useState(true);

  const [countryCode, setCountryCode] = useState(user.countryCode);
  const [termsFlag, setTermsFlag] = useState(false);

  /**
   * handles phone number validation
   * @param contactNo
   */
  const handlePhoneNoValidation = (contactNo) => {
    setPhoneNo(contactNo);
    setIsPhoneNoValid(mobileNumberRegex.test(contactNo));
  };

  /**
   * Submits the user data to backend API and redirects to posts route
   */
  async function addUsertoDb() {
    try {
      const response = await fetch("https://codebuddy.review/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      window.location.href = "/posts";
    } catch (error) {
      throw new Error("error while adding new user");
    }
  }

  /**
   * Submits user data to backend
   * @param {event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (areAllInputsValid) {
      addUsertoDb();
    }
  };

  /**
   * Flag that indicates whether all inputs provided by user are valid or not
   */
  const areAllInputsValid = useMemo(() => {
    const areAllRequiredValuesProvided = phoneNo.length && countryCode;
    return areAllRequiredValuesProvided && isPhoneNoValid && countryCode.length && termsFlag;
  }, [isPhoneNoValid, countryCode, termsFlag]);

  /**
   * Returns true when all user data (including all 3 forms) is valid.
   * @returns {Bool}isValid
   */
  const isValidUSer = () => {
    const { emailId, password, firstName, address } = user;
    return emailId.length && password.length && firstName.length && address.length;
  };

  /**
   * Saves data to react context
   * @param {event} event
   */
  const handleSave = (event) => {
    event.preventDefault();
    if (areAllInputsValid) {
      updateUser({ ...user, countryCode, phoneNumber: phoneNo });
      if (isValidUSer()) {
        addUsertoDb();
      } else {
        alert("please fill out all the forms");
      }
    } else if (!isPhoneNoValid || !phoneNo.length) {
      alert("Please enter valid phone number");
    } else if (!countryCode.length) {
      alert("Please select a country code");
    } else if (!termsFlag) {
      alert("Please accept terms and conditions!!!");
    } else {
      alert("please fill out all the forms");
    }
  };

  return (
    <div className="w-full max-w-md rounded-b-lg bg-white p-8 shadow-md">
      <form onSubmit={handleSubmit}>
        <CountryCodeDropdown value={countryCode} onChange={setCountryCode} />
        <InputElement
          labelName="Phone Number"
          type="tel"
          value={phoneNo}
          onValueChange={handlePhoneNoValidation}
          isValid={isPhoneNoValid}
          isRequired={true}
          errorMsg={isPhoneNoValid ? "" : "Enter valid phone number"}
        />
        <TermsCheckbox acceptTerms={termsFlag} handleAcceptTermsChange={setTermsFlag} />
        <FormButtons onBack={onBack} onSave={handleSave} isSaveAndNextDisabled={true} />
      </form>
    </div>
  );
};

export default contactInfoForm;