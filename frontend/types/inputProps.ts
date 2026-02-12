export type InputProps = {
    htmlFor?: string;
    value?: string | number;
    placeholder?: string;
    isError?: boolean;
    onChange: (value: string | number) => void;
    onBlur?: () => void;
    type?: "text" | "number";
    isDisabled?: boolean;
};
