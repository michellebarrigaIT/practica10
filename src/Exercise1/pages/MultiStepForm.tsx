import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Step1 from "../components/Form/Step1/Step1";
import Step2 from "../components/Form/Step2/Step2";
import Step3 from "../components/Form/Step3/Step3";
import Step4 from "../components/Form/Step4/Step4";
import Navigation from "../components/Form/Navigation/Navigation";
import './MultiStepForm.scss'
import StepIndicator from "../components/StepIndicator/StepIndicator";

const validationSchemas = [
    Yup.object({
        name: Yup.string().required("Name is required"),
        age: Yup.number().required("Age is required").min(14, "Minimum age is 14"),
        email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    Yup.object({
        country: Yup.string().required("Country is required"),
        city: Yup.string().required("City is required"),
        zip: Yup.string()
        .matches(/^[0-9]{5}$/, "Invalid ZIP code")
        .required("ZIP code is required"),
    }),
    Yup.object({
        contactMethod: Yup.string().required("Select a contact method"),
        newsletter: Yup.boolean(),
        category: Yup.string().required("Select a category"),
    }),
    Yup.object(),
    ];

const initialValues = {
    name: "",
    age: "",
    email: "",
    country: "",
    city: "",
    zip: "",
    contactMethod: "",
    newsletter: false,
    category: "",
};

const stepLabels = ["Personal Info", "Address", "Preferences", "Review"];

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [savedValues, setSavedValues] = useState(initialValues);

    useEffect(() => {
        const data = localStorage.getItem("formData");
        if (data) {
            setSavedValues(JSON.parse(data));
        }
    }, []);

    const handleSubmit = (values: typeof initialValues) => {
        if (step === 3) {
            alert("Form Submitted" + JSON.stringify(values, null, 2));
        } else {
            setStep(step + 1);
        }
        localStorage.setItem("formData", JSON.stringify(values));
    };

    const handleBack = () => setStep(step - 1);

    return (
        <div className="multistep-container">
            <div className="header-bar" >
                <StepIndicator step={step} steps={stepLabels} />
            </div>
            <div className="welcome-message">
                <h1>Welcome!</h1>
                <p> Get Started in under 2 minutes.</p>
            </div>
            <div className="form">
                <Formik
                    initialValues={savedValues}
                    enableReinitialize
                    validationSchema={validationSchemas[step]}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                    <Form>
                        {step === 0 && <Step1 />}
                        {step === 1 && <Step2 />}
                        {step === 2 && <Step3 />}
                        {step === 3 && <Step4 values={values} />}
                        <Navigation step={step} handleBack={handleBack} />
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
