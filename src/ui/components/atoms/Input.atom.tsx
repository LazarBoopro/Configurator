import { HTMLInputTypeAttribute } from "react";
import "../../styles/atoms.scss";

type InputProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: HTMLInputTypeAttribute;
    label: string;
    name?: string;
};
const Input = ({ onChange, type, label, name }: InputProps) => {
    return (
        <div className="input-container">
            {type !== "radio" && <span className="label">{label}</span>}
            <input type={type} onChange={onChange} className={`input ${type}`} name={name} />
            {type === "radio" && <span className="label">{label}</span>}
        </div>
    );
};

export default Input;
