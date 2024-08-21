import { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
  });

  const updateUser = (newUser) => {
    setUser(() => ({
      ...newUser,
    }));
  };

  return <userContext.Provider value={{ user, updateUser }}>{children}</userContext.Provider>;
};

export { userContext, UserProvider };