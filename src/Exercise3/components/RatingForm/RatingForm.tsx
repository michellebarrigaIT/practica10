import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type RatingValues = {
    name: string;
    rating: number | "";
    feedback: string;
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    rating: Yup.number()
        .required("Rating is required")
        .min(1, "Min is 1")
        .max(5, "Max is 5"),
    feedback: Yup.string().when("rating", {
        is: (rating: number) => rating < 3,
        then: (schema) => schema.required("Feedback is required for rating < 3"),
        otherwise: (schema) => schema.notRequired(),
    }),
});

const initialValues: RatingValues = {
    name: "",
    rating: "",
    feedback: "",
};

export default function RatingForm() {
    const [submitted, setSubmitted] = useState<RatingValues | null>(null);

    return (
        <div className="rating-container">
            <h2>Rate our service</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                setSubmitted(values);
                resetForm();
                }}
            >
                {({ values, setFieldValue }) => (
                <Form className="rating-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" />
                        <ErrorMessage component="div" className="error" name="name" />
                    </div>

                    <div className="form-group">
                        <label>Rating</label>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setFieldValue("rating", star)}
                                className={star <= (values.rating || 0) ? "filled" : ""}
                            >
                                ★
                            </span>
                            ))}
                        </div>
                        <ErrorMessage component="div" className="error" name="rating" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="feedback">Feedback</label>
                        <Field
                            as="textarea"
                            id="feedback"
                            name="feedback"
                            placeholder="Leave your comment..."
                        />
                        <ErrorMessage
                            component="div"
                            className="error"
                            name="feedback"
                        />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
                )}
            </Formik>

            {submitted && (
                <div className="submitted">
                    <h3>Thank you for your feedback!</h3>
                    <p>
                        <strong>Name:</strong> {submitted.name}
                    </p>
                    <p>
                        <strong>Rating:</strong> {submitted.rating} ★
                    </p>
                    {submitted.feedback && (
                        <p>
                        <strong>Feedback:</strong> {submitted.feedback}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
