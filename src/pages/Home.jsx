
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormItem from "../common/FormItem";
import "../pages/Home.css"
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";
import * as Yup from 'yup'


const validationSchemaOne = Yup.object({
  "emailId": Yup.string().required('Please Enter The Email Id').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Please Enter Valid Email Addresss"),
  "password": Yup.string().required('Please Enter The Password').matches(/^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~=-]).{8,}$/, "Please Enter Valid Password"),
});
const validationSchemaTwo = Yup.object({
  "address": Yup.string().required('Please Enter Address').matches(/^[a-zA-Z0-9., ]{8,}$/, 'Please Enter Valid Address'),
  "firstName": Yup.string().required('Please Enter First Name'),
  "lastName": Yup.string().optional(),

});
const validationSchemaThree = Yup.object({
  "countryCode": Yup.string().required('Please Select Country Code'),
  "phoneNumber": Yup.string().required('Please Enter Phone Number').matches(/^[6789]\d{9}$/, "Please Enter Valid Phone Number"),
  "terms": Yup.boolean().required("It Is Required")
});

const initialValues = {
  "emailId": "",
  "password": "",
  "firstName": "",
  "lastName": "",
  "address": "",
  "countryCode": "",
  "phoneNumber": "",
  'terms':''
}


const Home = () => {
  const [activeForm, setActiveForm] = useState(1)
  const [submitInProgress,setSubmitInProgress]=useState(false)
  const navigate=useNavigate()

  const renderForm = {
    1: <FormOne />,
    3: <FormThree />,
    2: <FormTwo />,
  }

  const validationSchema = {
    1: validationSchemaOne,
    2: validationSchemaTwo,
    3: validationSchemaThree
  }


  const onSubmit = async (values,) => {
    try {
      setSubmitInProgress(true)
      const payload=Object.assign({},values)
      delete payload.terms
      const response = await fetch('https://codebuddy.review/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      const responseData = await response.json();
      navigate('/posts')


    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="p-6 bg-cyan-500 rounded-lg lg:w-[60%] md:w-[70%] w-[90%] h-[450px]">
      <div className="flex flex-col items-center ">
        <div className="grid grid-cols-3 gap-4  w-[90%] mb-8">
          <div className={`${activeForm > 0 ? 'bg-red-300' : 'bg-white'}  h-1 rounded-md`}></div>
          <div className={`${activeForm > 1 ? 'bg-red-300' : 'bg-white'} h-1 rounded-md`}></div>
          <div className={`${activeForm > 2 ? 'bg-red-300' : 'bg-white'} h-1 rounded-md`}></div>
        </div>
      </div>

      {/* {renderForm[activeForm]} */}
      <Formik initialValues={initialValues}
        validationSchema={validationSchema[activeForm]}
        onSubmit={(values) => {
         
          if (activeForm == 3) {
           
            onSubmit(values).then(() => { setSubmitInProgress(true)}).catch(() => {setSubmitInProgress(true)})
          
          } else {
            setActiveForm(prev => prev + 1)
          }
        }}
      >
        {(formikProps) => (
          <Form className="h-[90%]"  >
            <div className="flex flex-col h-full ">
              {React.cloneElement(renderForm[activeForm], { formikProps })}
              <div className="flex items-center self-end gap-2 mt-auto">
                {activeForm != 1 && <button disabled={activeForm == 1} type='button' onClick={() => {console.log('foem', activeForm) 
                  setActiveForm(prev => prev - 1)}}>
                  Back
                </button>}
                 {activeForm != 3&&<button disabled={activeForm == 3} type={activeForm != 3 ? 'submit' : 'button'}>
                  Save & Next
                </button>}
                {activeForm == 3 && <button disabled={submitInProgress} type={activeForm == 3 ? 'submit' : 'button'}  style={{ cursor: submitInProgress ? 'not-allowed' : 'pointer' }}>
                {submitInProgress?'Loading...': 'Submit'}
                </button>}
              </div>
            </div>
          </Form>
        )}

      </Formik>


    </div>
  );
};

export default Home;
