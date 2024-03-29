import { useState } from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const Form1 = ({ onNext, formData, setFormData }) => {
  const [emailId, setEmailId] = useState(formData.emailId || "");
  const [password, setPassword] = useState(formData.password || "");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validateForm = () => {
    const errors = {};
    if (!emailId.trim()) {
      errors.emailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailId)) {
      errors.emailId = "Email is invalid";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (
      !/(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+}{":;'?/>.<,].*[!@#$%^&*()_+}{":;'?/>.<,])/.test(
        password,
      )
    ) {
      errors.password =
        "Password must contain 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 special characters";
    }

    return errors;
  };

  const handleSave = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormData({ emailId, password });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const handleSaveAndNext = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onNext({ emailId, password });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            className="input-container"
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter Your Email"
          />
          {errors.emailId && <span className="error">{errors.emailId}</span>}
        </div>
        <div style={{ position: "relative" }}>
          <label>Password:</label>
          <input
            className="input-container"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button
            className="all-button show-hide-btn"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Icon icon="mdi:eye-outline" /> : <Icon icon="mdi:eye-off-outline" />}
          </button>
        </div>
        {errors.password && <span className="error">{errors.password}</span>}
      </form>
      <div className="button-container">
        <button className="all-button back" disabled>
          Back
        </button>
        <button className="all-button save" onClick={handleSave}>
          Save
        </button>
        <button className="all-button save-next" onClick={handleSaveAndNext}>
          Save and Next
        </button>
      </div>
    </div>
  );
};

Form1.propTypes = {
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
export default Form1;
