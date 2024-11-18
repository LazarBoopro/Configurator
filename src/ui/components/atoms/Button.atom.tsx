import "../../styles/atoms.scss";

type ButtonProps = {
    // title: string;
    variant?: "primary" | "secondary" | "outline";
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick: (() => void) | (() => Promise<void>);
    children: React.ReactNode | string;
};

export const Button = ({ type, children, variant, disabled, onClick }: ButtonProps) => {
    return (
        <button
            onClick={() => (disabled ? null : onClick())}
            className={`button ${variant} ${disabled ? "disabled" : ""}`}
            type={type || "button"}
        >
            {children}
        </button>
    );
};
