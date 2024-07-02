import * as yup from "yup";

// EmptySchema
export let EmptySchema = () => {
  return yup.object().shape({
    // validations
  });
};

// Form1Schema
export let Form1Schema = () => {
  return yup.object().shape({
    emailId: yup.string().required("Email Id is required").email(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
        "Password must contain minimum 2 capital letters, 2 small letters, 2 numbers, and 2 special characters",
      ),
  });
};

// Form2Schema
export let Form2Schema = () => {
  return yup.object().shape({
    firstName: yup
      .string()
      .nullable()
      .required("First name is required")
      .matches(/^[a-zA-Z]{2,50}$/, "Invalid format for first name"),
    lastName: yup
      .string()
      .nullable()
      .matches(/^[a-zA-Z]*$/, "Invalid format for last name"),
    address: yup.string().required("Address is required").min(10),
  });
};

// Form3Schema
export let Form3Schema = () => {
  return yup.object().shape({
    countryCode: yup
      .string()
      .nullable()
      .required("Country code is selection required")
      .oneOf(["+91", "+1"]),
    phoneNumber: yup
      .string()
      .nullable()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Invalid phone number"),
    acceptTermsAndCondition: yup.boolean().oneOf([true], "Terms and conditions must be accepted"),
  });
};
