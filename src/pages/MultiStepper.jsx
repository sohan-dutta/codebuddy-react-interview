import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Paper } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import Styles from "../../src/styles/Stepper.module.css";
import StepperButton from "../../src/pages/SteeperButton";
import NewStepperWrapper from "../../src/pages/Stepper";
import Form1 from "../../src/pages/Form1";
import Form2 from "../../src/pages/Form2";
import Form3 from "../../src/pages/Form3";
import { Form1Schema, Form2Schema, Form3Schema } from "../schema/MultiStepperSchema";
import { useNavigate } from "react-router-dom";

// Constants
const icons = {
  1: <PermIdentityIcon />,
  2: <HomeIcon />,
  3: <AddCircleIcon />,
};

// Function to get steps
function getSteps() {
  return [
    <strong key={1}>Form 1</strong>,
    <strong key={2}>Form 2</strong>,
    <strong key={3}>Form 3</strong>,
  ];
}

// Function to get step content
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Form1 key={2} />;

    case 1:
      return <Form2 key={3} />;

    case 2:
      return <Form3 key={4} />;

    default:
      return "unknown step";
  }
}

// Main component
const MultiStepper = () => {
  const navigate = useNavigate();
  const [dataValidation, setDataValidation] = useState(Form1Schema());
  const methods = useForm({
    resolver: yupResolver(dataValidation),
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // Handle Next
  const handleNext = (data) => {
    console.log("FormData", data, activeStep);

    // final step
    if (activeStep === steps?.length - 1) {
      console.log("FormSubmit", data);

      const { acceptTermsAndCondition, ...finalBodyForApi } = data;
      console.log("acceptTermsAndCondition", acceptTermsAndCondition);

      const url = "https://codebuddy.review/submit";

      submitApi(url, finalBodyForApi);

      // save api call
    } else {
      setActiveStep((activeStep) => activeStep + 1);
    }
  };

  const submitApi = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(response, "response");
      const finalResonse = await response.json();
      console.log(finalResonse, "finalResonse");
      navigate("/posts");
    } catch (error) {
      console.log(error, "error");
    }
  };

  // Apply validation based on active step
  const applyValidation = () => {
    if (activeStep === 0) {
      setDataValidation(Form1Schema());
    } else if (activeStep === 1) {
      setDataValidation(Form2Schema());
    } else if (activeStep === 2) {
      setDataValidation(Form3Schema());
    }
  };

  // Effect to apply validation on active step change
  useEffect(() => {
    applyValidation();
  }, [activeStep]);

  // Effect to log form errors
  useEffect(() => {
    if (Object.keys(errors)?.length > 0) {
      alert("Please fill all the required fields");
    }
    console.log("FormErrors", errors);
  }, [errors]);

  // Render component
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleNext)}>
          <Paper square className={Styles.Paper} elevation={5}>
            {/* Main Heading */}
            <div className={Styles.MainHeaderTitleDiv}>Stepper Form</div>
            {/* Stepper component */}
            <>
              <NewStepperWrapper activeStep1={activeStep} steps1={steps} icons1={icons} />
            </>

            {/* Main form content */}
            <>{getStepContent(activeStep)}</>

            {/* Stepper button component */}
            <StepperButton activeStep={activeStep} steps={steps} setActiveStep={setActiveStep} />
          </Paper>
        </form>
      </FormProvider>
    </div>
  );
};

export default MultiStepper;
