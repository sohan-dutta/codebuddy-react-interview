import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";
import Form3 from "../Components/Form3";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [filledForms, setFilledForms] = useState([]);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
    setFilledForms([...filledForms, step]);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    console.log("Submitting data:", JSON.stringify(data));
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }
        return response.json();
      })
      .then((data) => {
        setFormData({});
        setStep(1);
        console.log("Form data submitted successfully:", data);
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  const handleTabClick = (index) => {
    if (filledForms.includes(index)) {
      setStep(index);
    }
  };

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <div className="flex justify-between">
        <h1 className="mb-4 flex items-center text-4xl font-bold">
          <Icon icon="mdi:home" className="mr-2" />
          Home
        </h1>
        <Link to="/posts" className="flex items-center text-blue-600 hover:underline">
          Posts
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </Link>
      </div>

      <h2 className="mb-3 text-2xl">Welcome to the CodeBuddy!</h2>

      <div className="form">
        <div style={{ width: "50vw" }}>
          <div className="stepper">
            <div className={step === 1 ? "active" : ""} onClick={() => handleTabClick(1)}>
              Form 1
            </div>
            <div className={step === 2 ? "active" : ""} onClick={() => handleTabClick(2)}>
              Form 2
            </div>
            <div className={step === 3 ? "active" : ""} onClick={() => handleTabClick(3)}>
              Form 3
            </div>
          </div>
          {step === 1 && (
            <Form1 onNext={handleNext} formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Form2
              onNext={handleNext}
              onPrev={handlePrev}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <Form3
              onSubmit={handleSubmit}
              onPrev={handlePrev}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
