import { useState } from "react";
import Stepper from "../components/Stepper";
import FormWrapper from "../components/FormWrapper";
import Field from "../components/Filed";
import Button from "../components/Button";
import { useApp } from "../context/AppContext";
import { validate } from "../utils";
import { API_URL } from "../mocks/handlers";
import { useNavigate } from "react-router-dom";

const Form = ({ children }) => {
  return <>{children}</>;
};

const Home = () => {
  const { step, setStep, formData, dispatch, steps } = useApp();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleNext() {
    if (validate(formData, step, setErrors)) {
      handleSave();
      setStep((prev) => prev + 1);
    }
  }

  function handleBack() {
    setStep((prev) => prev - 1);
  }

  function handleTabChange(currentStep) {
    if (validate(formData, currentStep - 1, setErrors)) {
      setStep(currentStep);
    }
  }

  function handleSave() {
    if (validate(formData, step, setErrors)) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Form Saved.");
    }
  }

  async function handleSubmit() {
    if (validate(formData, step, setErrors)) {
      try {
        const body = { ...formData };
        delete body["acceptTermsAndCondition"];
        const response = await fetch(`${API_URL}/submit`, {
          method: "POST",
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (data?.message === "Success") {
          navigate("/posts");
        }
      } catch (err) {
        alert("Something went wrong!");
        console.error(err);
      }
    }
  }
  const disabled = step === steps.length;
  return (
    <div className="mx-auto max-w-6xl rounded-lg bg-gray-50 p-7 pt-5 text-gray-900 shadow-lg">
      <h2 className="mb-4 text-2xl">Please fill the form!</h2>
      <div className="w-full">
        <Stepper steps={steps} onStep={step} handleNextStep={handleTabChange} />

        <FormWrapper>
          <Form>
            <Field
              label={"Email address"}
              type="email"
              placeholder="abc@gmail.com"
              required
              value={formData?.emailId}
              onChange={(e) => dispatch({ type: "emailId", payload: e.target.value })}
              error={errors?.emailId}
            />
            <Field
              label={"Password"}
              type="password"
              placeholder="********"
              required
              value={formData?.password}
              onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
              error={errors?.password}
            />
          </Form>
          <Form>
            <Field
              label={"First Name"}
              type="text"
              placeholder="John"
              value={formData?.firstName}
              required
              onChange={(e) => dispatch({ type: "firstName", payload: e.target.value })}
              error={errors?.firstName}
            />
            <Field
              label={"Last Name"}
              type="text"
              placeholder="Doe"
              value={formData?.lastName}
              required={false}
              onChange={(e) => dispatch({ type: "lastName", payload: e.target.value })}
            />
            <Field
              label={"Address"}
              type="text"
              placeholder="Address..."
              value={formData?.address}
              required
              onChange={(e) => dispatch({ type: "address", payload: e.target.value })}
              error={errors?.address}
            />
          </Form>
          <Form>
            <Field
              label={"Contry Code"}
              type="select"
              required
              value={formData?.countryCode}
              options={[
                { value: "+91", label: "+91(India)" },
                { value: "+1", label: "+1(America)" },
              ]}
              onChange={(e) => dispatch({ type: "countryCode", payload: e.target.value })}
              error={errors?.countryCode}
            />
            <Field
              label={"Phone Number"}
              type="tel"
              placeholder="+919767..."
              value={formData?.phoneNumber}
              defaultValue="+91"
              required
              onChange={(e) => dispatch({ type: "phoneNumber", payload: e.target.value })}
              error={errors?.phoneNumber}
            />
            <Field
              label={"Accept Terms And Condition"}
              type="checkbox"
              required
              checked={formData?.acceptTermsAndCondition}
              onChange={(e) =>
                dispatch({
                  type: "acceptTermsAndCondition",
                  payload: !formData?.acceptTermsAndCondition,
                })
              }
              error={errors?.acceptTermsAndCondition}
            />
          </Form>
        </FormWrapper>

        <div className="mx-auto mt-10 max-w-xs">
          <div className="flex gap-4">
            <Button label={"Back"} onClick={handleBack} disabled={step === 1} />
            <Button
              label={disabled ? "Submit" : "Save & Next"}
              onClick={() => {
                if (disabled) {
                  handleSubmit();
                } else {
                  handleNext();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
