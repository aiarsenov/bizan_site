"use client";

import type { InputProps } from "@/types/inputProps";

export default function FormInput({
    htmlFor = "",
    value,
    placeholder,
    isError = false,
    onChange,
    onBlur,
    type = "text",
    isDisabled = false,
}: InputProps) {
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
