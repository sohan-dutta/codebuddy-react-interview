import { Icon } from "@iconify/react";
import { useState } from "react";
import { UserProvider } from "../utils/userContext";
import PersonalInfoForm from "../components/personalInfoForm";
import EmailAndPassForm from "../components/emailAndPassForm";
import ContactInfoForm from "../components/contactInfoForm";
import Tabs from "../components/navigationTabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { key: 1, label: "Email and Password" },
    { key: 2, label: "Personal Information" },
    { key: 3, label: "Contact Information" },
  ];

  const handleSaveAndNext = (event) => {
    event.preventDefault();
    console.log("next");
    setActiveTab(activeTab + 1);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setActiveTab(activeTab - 1);
  };

  return (
    <UserProvider>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold">CodeBuddy</h1>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Tabs tabs={tabs} currentTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === 1 && <EmailAndPassForm onSaveAndNext={handleSaveAndNext} />}
          {activeTab === 2 && (
            <PersonalInfoForm onSaveAndNext={handleSaveAndNext} onBack={handleBackClick} />
          )}
          {activeTab === 3 && <ContactInfoForm onBack={handleBackClick} />}
        </div>
      </div>
    </UserProvider>
  );
};

export default Home;