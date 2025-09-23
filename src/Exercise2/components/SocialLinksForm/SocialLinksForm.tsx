import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";

type SocialLink = {
  platform: string;
  url: string;
};

type FormValues = {
  links: SocialLink[];
};

export default function SocialLinksForm() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
        links: [{ platform: "", url: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "links",
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        alert("Submitted" + JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Social Media Links</h2>

            {fields.map((field, index) => (
                <div key={field.id}>

                <select
                    {...register(`links.${index}.platform`, { required: "Platform required" })}
                    className="border p-2 rounded"
                >
                    <option value="">Select platform</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="GitHub">GitHub</option>
                </select>

                <input
                    type="url"
                    placeholder="https://example.com"
                    {...register(`links.${index}.url`, {
                    required: "URL required",
                    pattern: {
                        value: /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/,
                        message: "Invalid URL",
                    },
                    })}
                />

                {fields.length > 1 && (
                    <button
                        type="button"
                        onClick={() => remove(index)}
                    >
                        ✕
                    </button>
                )}
                </div>
            ))}

            {errors.links && (
                <p>At least 1 valid link required</p>
            )}

            {fields.length < 5 && (
                <button
                    type="button"
                    onClick={() => append({ platform: "", url: "" })}
                >
                    + Add Link
                </button>
            )}

            <button type="submit">
                Submit
            </button>
        </form>
    );
}
