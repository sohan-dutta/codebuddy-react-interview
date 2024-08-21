import { useState, useMemo, useContext } from "react";
import InputElement from "./inputElement";
import FormButtons from "./FormButtons";
import { userContext } from "../utils/userContext";
import { emailRegex, passwordRegex } from "../utils/constants";

const EmailAndPassForm = ({ onSave, onSaveAndNext, onBack }) => {
  const { user, updateUser } = useContext(userContext);

  const [email, setEmail] = useState(user.emailId);
  const [pass, setPass] = useState(user.password);

  const [isMailValid, setIsMailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  /**
   * handles email validation
   * @param {string} emailVal
   */
  const handleEmailValidation = (emailVal) => {
    const isValid = emailRegex.test(String(emailVal).toLowerCase());
    setEmail(emailVal);
    setIsMailValid(isValid);
  };

  /**
   * handles password validation
   * @param {string} passwordVal
   */
  const handlePasswordValidation = (passwordVal) => {
    setPass(passwordVal);
    const isValid = passwordRegex.test(String(passwordVal));
    setIsPassValid(isValid);
  };

  /**
   * Flag that indicates whether all inputs provided by user are valid or not
   */
  const areAllInputsValid = useMemo(() => {
    const areAllRequiredValuesProvided = email.length && pass.length;
    return areAllRequiredValuesProvided && isMailValid && isPassValid;
  }, [isMailValid, isPassValid]);

  /**
   * Saves user inputs to react context if they are valid and then moves to next form
   * @param {event} event
   */
  const handleSaveAndNext = (event) => {
    event.preventDefault();
    console.log(areAllInputsValid, "areAllInputsValid");
    if (areAllInputsValid) {
      handleSave(event);
      onSaveAndNext(event);
      return;
    }
    if (!isMailValid || !email.length) {
      alert("please enter valid email address");
    } else if (!isPassValid || !pass.length) {
      alert("please enter valid password");
    }
  };

  /**
   * Saves user inputs to react context
   * @param {event} event
   */
  const handleSave = (event) => {
    event.preventDefault();
    if (areAllInputsValid) {
      updateUser({ ...user, emailId: email, password: pass });
    } else {
      alert("Please enter valid inputs");
    }
    console.log(user);
  };

  return (
    <div className="w-full max-w-md rounded-b-lg bg-white p-8 shadow-md">
      <form>
        <InputElement
          labelName="Email"
          type="email"
          value={email}
          onValueChange={handleEmailValidation}
          isValid={isMailValid}
          errorMsg={isMailValid ? "" : "Please enter valid Email Id"}
          isRequired={true}
        />
        <InputElement
          labelName="Password"
          type="password"
          value={pass}
          onValueChange={handlePasswordValidation}
          isValid={isPassValid}
          errorMsg={
            isPassValid
              ? ""
              : "Your password must contain atleast 2 capital letters, 2 small letter, 2 numbers and 2 special characters."
          }
          isRequired={true}
        />
        <FormButtons onSave={handleSave} onSaveAndNext={handleSaveAndNext} isBackDisabled={true} />
      </form>
    </div>
  );
};

export default EmailAndPassForm;