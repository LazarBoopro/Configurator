import "../../styles/atoms.scss";

type SelectProps = {
    options: string[] | { value: string | number; label: string }[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    label: string;
    defaultValue?: string | number;
};

const Select = ({ options, onChange, label, defaultValue }: SelectProps) => {
    return (
        <div className="select-container">
            <span className="label">{label}</span>
            <select onChange={onChange} className="select" defaultValue={defaultValue}>
                {options.map((option) => (
                    <option
                        value={typeof option === "string" ? option : option.value}
                        key={typeof option === "string" ? option : option.value}
                    >
                        {typeof option === "string" ? option : option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
