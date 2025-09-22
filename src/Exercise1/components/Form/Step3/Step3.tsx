import { Field, ErrorMessage } from "formik";
import "./Step3.scss";

export default function Step3() {
    return (
        <div className="step3">
            <div>
                <label>Preferred Contact Method:</label>
                <div>
                    <label><Field type="radio" name="contactMethod" value="Email" /> Email</label>
                    <label><Field type="radio" name="contactMethod" value="Phone" /> Phone</label>
                    <label><Field type="radio" name="contactMethod" value="WhatsApp" /> WhatsApp</label>
                </div>
                <ErrorMessage name="contactMethod" component="div" className="error"/>
            </div>
            <div>
                <label>
                    <Field type="checkbox" name="newsletter" className="checkbox" /> Subscribe to Newsletter
                </label>
            </div>
            <div >
                <label>Favorite Category:</label>
                <Field as="select" name="category" className="select">
                    <option value="">Select one</option>
                    <option value="Technology">Technology</option>
                    <option value="Health">Health</option>
                    <option value="Art">Art</option>
                    <option value="Travel">Travel</option>
                </Field>
                <ErrorMessage name="category" component="div" className="error"/>
            </div>
        </div>
    );
}
