import { useState } from "react";
import PropTypes from "prop-types";

const Form2 = ({ onNext, onPrev, formData, setFormData }) => {
  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [address, setAddress] = useState(formData.address || "");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!/^[a-zA-Z]{2,50}$/.test(firstName)) {
      errors.firstName =
        "First name must contain only alphabets and be between 2 and 50 characters";
    }

    if (lastName && !/^[a-zA-Z]*$/.test(lastName)) {
      errors.lastName = "Last name must contain only alphabets";
    }

    if (!address.trim() || address.trim().length < 10) {
      errors.address = "Address is required and must be at least 10 characters long";
    }

    return errors;
  };

  const handleSave = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormData({ firstName, lastName, address });
      setErrors({});
    } else {
      setErrors(errors);
      setErrors({});
    }
  };

  const handleSaveAndNext = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onNext({ firstName, lastName, address });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input
            className="input-container"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter Your First Name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            className="input-container"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Your Last Name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input
            className="input-container"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
      </form>
      <div className="button-container">
        <button className="all-button back" onClick={onPrev}>
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

Form2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
export default Form2;
