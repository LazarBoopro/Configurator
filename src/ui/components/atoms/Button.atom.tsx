import "../../styles/atoms.scss";

type ButtonProps = {
    // title: string;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick: (() => void) | (() => Promise<void>);
    children: React.ReactNode | string;
};

export const Button = ({ type, children, variant, disabled, onClick }: ButtonProps) => {
    return (
        <button
            onClick={() => onClick()}
            className={`button ${variant} ${disabled ? "disabled" : ""}`}
            type={type || "button"}
        >
            {children}
        </button>
    );
};
