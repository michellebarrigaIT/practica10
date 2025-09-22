import { Field, ErrorMessage } from "formik";

export default function Step2() {
    return (
        <>
        <div>
            <label>Country:</label>
            <Field name="country"/>
            <ErrorMessage name="country" component="div"/>
        </div>
        <div>
            <label>City:</label>
            <Field name="city"/>
            <ErrorMessage name="city" component="div"/>
        </div>
        <div>
            <label>ZIP Code:</label>
            <Field name="zip"/>
            <ErrorMessage name="zip" component="div"/>
        </div>
        </>
    );
}
