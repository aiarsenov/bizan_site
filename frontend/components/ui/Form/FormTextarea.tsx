"use client";

import { useRef, useEffect } from "react";

export default function FormTextarea({
    value,
    placeholder,
    minHeight = 45,
    isError = false,
    onChange,
    onBlur,
    isDisabled,
}: {
    value: string;
    placeholder: string;
    minHeight?: number;
    isError?: boolean;
    onChange: (value: string) => void;
    onBlur?: () => void;
    isDisabled?: boolean;
}) {
    const textareaRef = useRef(null);

    const resizeTextarea = () => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = Math.max(el.scrollHeight, minHeight) + "px";
        }
    };

    useEffect(() => {
        resizeTextarea();
    }, [value, minHeight]);

    return (
        <textarea
            ref={textareaRef}
            className={`form-textarea ${isError ? "form-textarea_error" : ""}`}
            value={value ?? ""}
            onChange={(event) => onChange?.(event.target.value)}
            onBlur={onBlur}
            rows={1}
            placeholder={placeholder}
            disabled={isDisabled}
        />
    );
}
