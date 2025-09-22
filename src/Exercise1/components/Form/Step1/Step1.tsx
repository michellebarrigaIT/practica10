import { Field, ErrorMessage } from "formik";
import './Step1.scss'

export default function Step1() {
    return (
        <>
        <div className="field">
            <label>Name:</label>
            <Field name="name" className="input"/>
            <ErrorMessage name="name" component="div" className="error"/>
        </div>
        <div className="field">
            <label>Age:</label>
            <Field name="age" type="number" className="input"/>
            <ErrorMessage name="age" component="div" className="error"/>
        </div>
        <div className="field">
            <label>Email:</label>
            <Field name="email" type="email" className="input"/>
            <ErrorMessage name="email" component="div" className="error"/>
        </div>
        </>
    );
}
