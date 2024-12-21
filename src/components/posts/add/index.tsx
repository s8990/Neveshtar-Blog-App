import {useFormik} from "formik";
import { object, string, number } from 'yup';
import {CreatePostType} from "@/types/Post";
import TextInput from "@/components/shared/form/TextInput";
import TextAreaInput from "@/components/shared/form/TextAreaInput";
import Button from "@/components/shared/form/PrimaryButton";

const initialValues: CreatePostType = {
    title: "",
    body: "",
    userId: 0,
}

const validationSchema = object({
    title: string().required("عنوان اجباری است").min(3, "خداقل 3 کاراکتر وارد کنید"),
    body: string().required("متن پست اجباری است").min(3, "خداقل 3 کاراکتر وارد کنید"),
    userId: number().required("شناسه کاربر اجباری است").positive("").integer(),
});

export default function AddPost() {
    const onSubmit = async  (values: CreatePostType) => {
        try {
            await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            formik.resetForm();
        } catch(error) {
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validationSchema: validationSchema,
        validateOnMount: true,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h4 className="font-semibold text-lg">افزودن پست</h4>

                <TextInput
                    type="text"
                    name="title"
                    label="عنوان"
                    required={true}
                    formik={formik}
                />

            <TextAreaInput
                type="text"
                name="body"
                label="متن پست"
                required={true}
                formik={formik}
            />

            <TextInput
                type="text"
                name="userId"
                label="شناسه کاربر"
                required={true}
                formik={formik}
            />


            <Button
                type="submit"
                label="افزودن پست"
                disabled={!formik.isValid} />
        </form>
    )
}