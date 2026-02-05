"use client";

import { IMaskInput } from "react-imask";

const MASK = "+{7} (000) 000-00-00";

export default function FormPhoneInput({
    htmlFor = "",
    value,
    placeholder = "+7 999 999 99 99",
    isError = false,
    onChange,
    onBlur,
    isDisabled = false,
}: {
    htmlFor?: string;
    value?: string;
    placeholder?: string;
    isError?: boolean;
    onChange: (value: string) => void;
    onBlur?: () => void;
    isDisabled?: boolean;
}) {
    return (
        <label
            htmlFor={htmlFor}
            className={`form-input ${isError ? "form-input_error" : ""}`}
        >
            <IMaskInput
                mask={MASK}
                id={htmlFor}
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder={placeholder}
                value={value ?? ""}
                onAccept={(val) => onChange(String(val || ""))}
                onBlur={onBlur}
                disabled={isDisabled}
            />
        </label>
    );
}
