import "../../styles/atoms.scss";

type TextProps = {
    variant?: "title" | "info";
    options?: string;
    color?: "primary" | "secondary" | "red";
    children: string | string[];
};

const Text = ({ variant, children, options, color }: TextProps) => {
    return <p className={`text ${variant} ${options} ${color}`}>{children}</p>;
};

export default Text;
