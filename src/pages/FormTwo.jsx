import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormItem from "../common/FormItem";

const CHARREGEX = /^[a-zA-Z]+$/




const FormTwo = ({ formikProps }) => {
    const { values, touched, errors, setFieldValue, handleBlur, } = formikProps
    console.log(values)
    return (
        <div className="grid md:grid-cols-2 gap-4 mb-10">
            <FormItem label="First Name" inValid={touched.firstName && errors.firstName} errorMessage={errors.firstName}>
                <Field name='firstName'>
                    {({ field, form }) =>
                    (<input type="text" maxLength={50} minLength={2}
                        {...field}
                        onChange={(e) => {

                            if (e.target.value === "" || CHARREGEX.test(e.target.value)) {

                                form.setFieldValue(field.name, e.target.value)
                            }
                        }}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />)}
                </Field>
            </FormItem>
            <FormItem label="Last Name">
                <Field name='lastName' inValid={touched.lastName && errors.lastName} errorMessage={errors.lastName}>
                    {({ field, form }) => <input type="text"  {...field} onChange={(e) => {

                        if (e.target.value === "" || CHARREGEX.test(e.target.value)) {

                            form.setFieldValue(field.name, e.target.value)
                        }
                    }}
                        onBlur={handleBlur} />}
                </Field>
            </FormItem>
            <FormItem label="Address" inValid={touched.address && errors.address} errorMessage={errors.address}>
                <Field name='address' >
                    {({ field }) => <input type="text"  {...field} />}
                </Field>
            </FormItem>


        </div>
    )



}

export default FormTwo