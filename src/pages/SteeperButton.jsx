/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Styles from "../../src/styles/Stepper.module.css";
import { Button, Stack } from "@mui/material";

// SteeperButton
const SteeperButton = ({ steps, activeStep, setActiveStep }) => {
  const navigate = useNavigate();
  // exitButton
  const exitButton = () => {
    navigate("/");
  };

  // handleBack
  const handleBack = () => {
    console.log("handleBack");
    setActiveStep(activeStep - 1);
  };

  //! =============>  useEffect

  //! view
  return (
    <>
      <div className={Styles.ButtonDiv}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          spacing={{ xs: 2, sm: 2, md: 5, lg: 5, xl: 5 }}
          className={Styles.Stack}
        >
          {/** Back Button */}
          <Button
            className={Styles.ButtonForMobileWidth}
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
          >
            Back
          </Button>

          <>
            {/** SaveAndNext Button */}
            <Button
              disabled={activeStep === steps?.length - 1}
              variant="contained"
              type="submit"
              className={Styles.ButtonForMobileWidth}
            >
              Save and Next
            </Button>

            {/** Next Button */}
            <Button variant="contained" type="submit" className={Styles.ButtonForMobileWidth}>
              Save
            </Button>
          </>

          {/** Exit Button */}
          <Button
            color="error"
            className={Styles.ButtonForMobileWidth}
            variant="contained"
            type="button"
            onClick={() => {
              exitButton();
            }}
          >
            Exit
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default SteeperButton;
