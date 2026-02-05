"use client";

export default function FormInput({
    htmlFor = "",
    value,
    placeholder,
    isError = false,
    onChange,
    onBlur,
    type = "text",
    isDisabled = false,
}: {
    htmlFor?: string;
    value?: string | number;
    placeholder?: string;
    isError?: boolean;
    onChange: (value: string) => void;
    onBlur?: () => void;
    type?: "text" | "number";
    isDisabled?: boolean;
}) {
    return (
        <label
            htmlFor={htmlFor}
            className={`form-input ${isError ? "form-input_error" : ""}`}
        >
            <input
                type={type}
                value={value ?? ""}
                placeholder={placeholder}
                id={htmlFor}
                onChange={(event) => onChange(event.target.value)}
                onBlur={() => {
                    onBlur?.();
                }}
                disabled={isDisabled}
            />
        </label>
    );
}
