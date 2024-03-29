import { useState } from "react";
import PropTypes from "prop-types";

const Form3 = ({ onSubmit, onPrev, formData }) => {
  const [countryCode, setCountryCode] = useState(formData.countryCode || "");
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(
    formData.acceptTermsAndCondition || false,
  );
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!countryCode.trim()) {
      errors.countryCode = "Country code is required";
    }

    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number is required and must be 10 digits";
    }

    if (!acceptTermsAndCondition) {
      errors.acceptTermsAndCondition = "Please accept terms and conditions";
    }

    return errors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const requestData = {
        ...formData,
        countryCode,
        phoneNumber,
      };

      onSubmit(requestData);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <div>
          <label>Country Code:</label>
          <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
            <option value="">Select Country Code</option>
            <option value="+91">India (+91)</option>
            <option value="+1">America (+1)</option>
          </select>
          {errors.countryCode && <span className="error">{errors.countryCode}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            className="input-container"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Your Phone Number"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>
            <input
              className="input-container"
              type="checkbox"
              checked={acceptTermsAndCondition}
              onChange={(e) => setAcceptTermsAndCondition(e.target.checked)}
            />{" "}
            Accept Terms and Conditions
          </label>
          {errors.acceptTermsAndCondition && (
            <span className="error">{errors.acceptTermsAndCondition}</span>
          )}
        </div>
        <div className="button-container">
          <button className="all-button back" onClick={onPrev}>
            Back
          </button>
          <button className="all-button save" type="submit">
            Save
          </button>
          <button className="all-button save-next" disabled>
            Save and Next
          </button>
        </div>
      </form>
    </div>
  );
};

Form3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default Form3;
