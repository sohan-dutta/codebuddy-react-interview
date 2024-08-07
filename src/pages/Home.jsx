import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Container,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Snackbar,
  Alert,
  FormControl,
} from "@mui/material";
import styles from "./Home.module.css";

const steps = ["Account Information", "Personal Information", "Contact Information"];

const Home = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (step === steps.length - 1) {
      try {
        const response = await fetch("https://codebuddy.review/submit", {
          method: "POST",
          body: JSON.stringify({
            emailId: formData.emailId,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            countryCode: formData.countryCode,
            phoneNumber: formData.phoneNumber,
          }),
        });
        const result = await response.json();
        console.log(result);
        navigate("/posts");
      } catch (error) {
        console.error("There was an error submitting the form!", error);
      }
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const renderFormStep = () => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" component="h2">
              Account Information
            </Typography>
            <Controller
              name="emailId"
              control={control}
              defaultValue={formData.emailId}
              rules={{
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/i, message: "Invalid email address" },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  {...field}
                  value={formData.emailId}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.emailId}
                  helperText={errors.emailId ? errors.emailId.message : ""}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={formData.password}
              rules={{
                required: "Password is required",
                validate: (value) =>
                  (/(?=.*[a-z].*[a-z])/.test(value) &&
                    /(?=.*[A-Z].*[A-Z])/.test(value) &&
                    /(?=.*[0-9].*[0-9])/.test(value) &&
                    /(?=.*[!@#$%^&*].*[!@#$%^&*])/.test(value)) ||
                  "Password must contain 2 capital letters, 2 small letters, 2 numbers, and 2 special characters",
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  type="password"
                  label="Password"
                  {...field}
                  value={formData.password}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              )}
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" component="h2">
              Personal Information
            </Typography>
            <Controller
              name="firstName"
              control={control}
              defaultValue={formData.firstName}
              rules={{
                required: "First Name is required",
                pattern: { value: /^[A-Za-z]+$/, message: "Only alphabets are allowed" },
                minLength: { value: 2, message: "Minimum 2 characters" },
                maxLength: { value: 50, message: "Maximum 50 characters" },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="First Name"
                  {...field}
                  value={formData.firstName}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue={formData.lastName}
              rules={{ pattern: { value: /^[A-Za-z]*$/, message: "Only alphabets are allowed" } }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  {...field}
                  value={formData.lastName}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              defaultValue={formData.address}
              rules={{
                required: "Address is required",
                minLength: { value: 10, message: "Minimum 10 characters" },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Address"
                  {...field}
                  value={formData.address}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.address}
                  helperText={errors.address ? errors.address.message : ""}
                />
              )}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" component="h2">
              Contact Information
            </Typography>
            <Controller
              name="countryCode"
              control={control}
              key="countryCode"
              defaultValue={formData.countryCode}
              rules={{ required: "Country Code is required" }}
              render={({ field }) => (
                <FormControl fullWidth margin="normal" error={!!errors.countryCode}>
                  <Select
                    fullWidth
                    margin="normal"
                    {...field}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      handleInputChange(e);
                    }}
                    error={!!errors.countryCode}
                  >
                    <MenuItem value="">Select Country Code</MenuItem>
                    <MenuItem value="+91">India (+91)</MenuItem>
                    <MenuItem value="+1">America (+1)</MenuItem>
                  </Select>
                  {errors.countryCode && (
                    <FormHelperText error>{errors.countryCode.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue={formData.phoneNumber}
              rules={{
                required: "Phone Number is required",
                pattern: { value: /^\d{10}$/, message: "Phone number must be 10 digits" },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone Number"
                  {...field}
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e);
                  }}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
                />
              )}
            />
            <Controller
              name="acceptTermsAndCondition"
              control={control}
              key="acceptTermsAndCondition"
              defaultValue={formData.acceptTermsAndCondition}
              rules={{ required: "You must accept the terms and conditions" }}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.checked);
                          handleInputChange({
                            target: { name: "acceptTermsAndCondition", value: e.target.checked },
                          });
                        }}
                      />
                    }
                    label="Accept Terms and Conditions"
                  />
                  {errors.acceptTermsAndCondition && (
                    <FormHelperText error>{errors.acceptTermsAndCondition.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container className={styles.container}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Information
        </Typography>
        <Tabs value={step} onChange={(e, newValue) => setStep(newValue)} variant="fullWidth">
          {steps.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
        {renderFormStep()}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button
              disabled={step === steps.length - 1}
              variant="contained"
              color="primary"
              onClick={handleSubmit(() => {
                setStep(step + 1);
              })}
            >
              Save and Next
            </Button>
          </Box>
        </form>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {steps[step]} saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
