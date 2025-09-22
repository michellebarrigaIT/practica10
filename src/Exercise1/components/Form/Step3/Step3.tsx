import { Field, ErrorMessage } from "formik";

export default function Step3() {
    return (
        <>
        <div>
            <label>Preferred Contact Method:</label>
            <div>
            <label><Field type="radio" name="contactMethod" value="Email" /> Email</label>
            <label><Field type="radio" name="contactMethod" value="Phone" /> Phone</label>
            <label><Field type="radio" name="contactMethod" value="WhatsApp" /> WhatsApp</label>
            </div>
            <ErrorMessage name="contactMethod" component="div"/>
        </div>
        <div>
            <label>
            <Field type="checkbox" name="newsletter" /> Subscribe to Newsletter
            </label>
        </div>
        <div>
            <label>Favorite Category:</label>
            <Field as="select" name="category">
            <option value="">Select one</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Art">Art</option>
            <option value="Travel">Travel</option>
            </Field>
            <ErrorMessage name="category" component="div"/>
        </div>
        </>
    );
}
