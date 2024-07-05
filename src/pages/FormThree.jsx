import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormItem from "../common/FormItem";

const Number = /^[0-9]+$/




const FormThree = ({ formikProps }) => {
    const { values, touched, errors, handleBlur } = formikProps
    return (

        <div className="grid md:grid-cols-2 gap-4 mb-10">
            <FormItem label="Contry Code" inValid={touched.countryCode && errors.countryCode} errorMessage={errors.countryCode}>
                <Field name='countryCode' >
                    {({ field, form }) => <select value={values.countryCode} {...field} onChange={(e) => {

                        form.setFieldValue(field.name, e.target.value)
                    }}>
                        <option value="">Select an option...</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>

                    </select>}
                </Field>
            </FormItem>
            <FormItem label="Phone Number" inValid={touched.phoneNumber && errors.phoneNumber} errorMessage={errors.phoneNumber}>
                <Field name='phoneNumber' >
                    {({ field, form }) => <input type="text"  {...field}
                        onChange={(e) => {

                            if (e.target.value === "" || Number.test(e.target.value)) {

                                form.setFieldValue(field.name, e.target.value)
                            }
                        }}
                        onBlur={handleBlur} />}
                </Field>
            </FormItem>
            <FormItem label="" inValid={touched.terms && errors.terms} errorMessage={errors.terms}>
                <Field name='terms' >
                    {({ field, form }) => (<div class="flex items-center">
                        <input
                            type="checkbox"
                            id="acceptTerms"
                            name="acceptTerms"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={values.terms}
                            onChange={(e)=>{ form.setFieldValue(field.name, e.target.checked);}}
                        />
                        <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                            I accept the terms and conditions
                        </label>
                    </div>)}
                </Field>
            </FormItem>



        </div>

    )


}



export default FormThree