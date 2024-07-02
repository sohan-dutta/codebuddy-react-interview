import React from "react";
import { useApp } from "../context/AppContext";

const FormWrapper = ({ children }) => {
  // React.Children helps to iterate over the array of children more efficiently adds 'key' attribute if not present.
  const childrenArray = React.Children.toArray(children);
  const { step } = useApp();
  return (
    <div className="mx-auto h-[300px] max-w-xl rounded-md sm:border sm:bg-slate-100 sm:px-2 md:px-6 lg:px-12">
      <form className="pt-8">{childrenArray[step - 1]}</form>
    </div>
  );
};

export default FormWrapper;
