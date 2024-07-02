export const validate = (formData, step, setErrors) => {
  const newErrors = {};
  if (step === 1) {
    if (!formData.emailId) newErrors.emailId = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.emailId)) newErrors.emailId = "Email is invalid.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (
      !/(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}/.test(
        formData.password,
      )
    )
      newErrors.password =
        "Password must contain minimum 2 capital/small letters, 2 numbers and 2 special characters.";
  }

  if (step === 2) {
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    else if (!/^[A-Za-z]{2,50}$/.test(formData.firstName))
      newErrors.firstName = "First name must be alphabetic and 2-50 characters long.";

    if (formData.lastName && !/^[A-Za-z]+$/.test(formData.lastName))
      newErrors.lastName = "Last name must be alphabetic.";

    if (!formData.address) newErrors.address = "Address is required.";
    else if (formData.address.length < 10)
      newErrors.address = "Address must be at least 10 characters long.";
  }

  if (step === 3) {
    if (!formData.countryCode) newErrors.countryCode = "Country code is required.";
    else if (!["+91", "+1"].includes(formData.countryCode))
      newErrors.countryCode = "Invalid country code.";

    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits.";

    if (!formData.acceptTermsAndCondition)
      newErrors.acceptTermsAndCondition = "You must accept the terms and conditions.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
