import { useState, useContext, useMemo } from "react";
import InputElement from "./InputElement";
import FormButtons from "./FormButtons";
import { userContext } from "../utils/userContext";
import { nameRegex } from "../utils/constants";

const PersonalInfoForm = ({ onSave, onSaveAndNext, onBack }) => {
  const { user, updateUser } = useContext(userContext);

  const [firstName, setFirstName] = useState(user.firstName);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const [lastName, setLastName] = useState(user.lastName);
  const [isLastNameValid, setIsLastNameValid] = useState(true);

  const [address, setAddress] = useState(user.address);
  const [isAddressValid, setIsAddressValid] = useState(true);

  /**
   * handles first name validation
   * @param {string} firstNameVal
   */
  const handleFirstNameValidation = (firstNameVal) => {
    setFirstName(firstNameVal);
    const isValidNameLength = firstNameVal.length > 1 && firstNameVal.length < 51;
    setIsFirstNameValid(nameRegex.test(firstNameVal) && isValidNameLength);
  };

  /**
   * handles last name validation
   * @param {string} lastNameVal
   */
  const handleLastNameValidation = (lastNameVal) => {
    setLastName(lastNameVal);
    setIsLastNameValid(lastNameVal.length == 0 || nameRegex.test(lastNameVal));
  };

  /**
   * handles address validation
   * @param {string} addressVal
   */
  const handleAddressValidation = (addressVal) => {
    setAddress(addressVal);
    setIsAddressValid(addressVal.length > 9);
  };

  /**
   * Flag that indicates whether all inputs provided by user are valid or not
   */
  const areAllInputsValid = useMemo(() => {
    const areAllRequiredValuesProvided = firstName.length && address.length;
    return areAllRequiredValuesProvided && isFirstNameValid && isLastNameValid && isAddressValid;
  }, [isFirstNameValid, isAddressValid]);

  /**
   * Saves user inputs if they are valid and then moves to next form
   * @param {event} event
   */
  const handleSaveAndNext = (event) => {
    event.preventDefault();
    if (areAllInputsValid) {
      handleSave(event);
      onSaveAndNext(event);
      return;
    }
    if (!isFirstNameValid || !firstName.length) {
      alert("Please enter valid first name");
    } else if (!isLastNameValid) {
      alert("Last name should contain only alphabets");
    } else if (!isAddressValid || !address.length) {
      alert("Address must contain atleast 10 characters");
    }
  };

  /**
   * Saves user inputs to react context
   * @param {event} event
   */
  const handleSave = (event) => {
    event.preventDefault();
    if (areAllInputsValid) {
      updateUser({ ...user, firstName, lastName, address });
    } else {
      alert("Please enter valid inputs");
    }
  };

  return (
    <div className="w-full max-w-md rounded-b-lg bg-white p-8 shadow-md">
      <form>
        <InputElement
          labelName="FirstName"
          type="text"
          value={firstName}
          onValueChange={handleFirstNameValidation}
          isValid={isFirstNameValid}
          errorMsg={
            isFirstNameValid
              ? ""
              : "Only alphabets allowed with min 2 characters and max 50 characters"
          }
          isRequired={true}
        />
        <InputElement
          labelName="LastName"
          type="text"
          value={lastName}
          onValueChange={handleLastNameValidation}
          isValid={isLastNameValid}
          errorMsg={isLastNameValid ? "" : "Only alphabets allowed"}
        />
        <InputElement
          labelName="Address"
          type="text"
          value={address}
          onValueChange={handleAddressValidation}
          isValid={isAddressValid}
          errorMsg={isAddressValid ? "" : "Minimum 10 characters should be present in address"}
          isRequired={true}
        />
        <FormButtons onBack={onBack} onSave={handleSave} onSaveAndNext={handleSaveAndNext} />
      </form>
    </div>
  );
};

export default PersonalInfoForm;