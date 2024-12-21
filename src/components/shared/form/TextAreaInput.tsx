type PropsType = {
    label: string;
    name: string;
    formik: any;
    required: boolean;
    type: string;
}

const TextAreaInput = ({label, name, formik, required, type = "text"}: PropsType) => {
    return (
        <div className="flex flex-col gap-1 my-4">
            <label htmlFor={name} className="font-bold text-sm">
                {label}
                {required &&
                    <span className="mr-1 text-red-600">*</span>
                }
            </label>
            <textarea
                id={name}
                name={name}
                type={type}
                className="border rounded-lg p-2"
                {...formik.getFieldProps(name)}
                rows={4}
            />
            {formik.errors[name] && formik.touched[name] && (
                <div className="text-red-600">{formik.errors[name]}</div>
            )}
        </div>
    );
}

export default TextAreaInput;