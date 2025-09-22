import { Field, ErrorMessage } from "formik";

export default function Step1() {
    return (
        <>
        <div>
            <label>Name:</label>
            <Field name="name"/>
            <ErrorMessage name="name" component="div"/>
        </div>
        <div>
            <label>Age:</label>
            <Field name="age" type="number"/>
            <ErrorMessage name="age" component="div"/>
        </div>
        <div>
            <label>Email:</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email" component="div"/>
        </div>
        </>
    );
}
