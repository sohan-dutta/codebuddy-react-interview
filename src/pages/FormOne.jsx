import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormItem from "../common/FormItem";


const FormOne = ({ formikProps }) => {
    console.log(formikProps)
    const { values, touched, errors } = formikProps



    return (
        <div className="grid md:grid-cols-2 gap-4 mb-10">
            <FormItem label="Email" inValid={touched.emailId && errors.emailId} errorMessage={errors.emailId}>
                <Field name='emailId'>
                    {({ field }) => <input type="text"  {...field} />}
                </Field>
            </FormItem>
            <FormItem label="Password" inValid={touched.password && errors.password} errorMessage={errors.password}>
                <Field name='password'>
                    {({ field }) => <input type="password"  {...field} />}
                </Field>
            </FormItem>
        </div>
    )
}

export default FormOne