type PropsType = {
    type?: "button" | "submit" | "reset";
    label: string;
    disabled?: boolean;
}

const Button = ({type = "submit", label, disabled}: PropsType) => {
    return (
        <button
            type={type}
            className="bg-colorPrimary disabled:bg-colorGrayDarkest text-colorPrimaryForeground disabled:text-black px-4 py-2 rounded-lg"
            disabled={disabled}
        >{label}</button>
    );
}

export default Button;