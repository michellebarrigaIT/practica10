import { Field, ErrorMessage } from "formik";

export default function Step2() {
    return (
        <>
        <div className="field">
            <label>Country:</label>
            <Field name="country" className="input"/>
            <ErrorMessage name="country" component="div" className="error"/>
        </div>
        <div className="field">
            <label>City:</label>
            <Field name="city" className="input"/>
            <ErrorMessage name="city" component="div" className="error"/>
        </div>
        <div className="field">
            <label>ZIP Code:</label>
            <Field name="zip" className="input"/>
            <ErrorMessage name="zip" component="div" className="error"/>
        </div>
        </>
    );
}
