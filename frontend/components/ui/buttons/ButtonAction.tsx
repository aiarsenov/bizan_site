import "./Buttons.scss";

export default function ButtonAction({
    title,
    label,
    className = "",
    isDisabled = false,
    isloading = false,
    onClick,
}: {
    title?: string;
    label: string;
    className?: string;
    isDisabled?: boolean;
    isloading?: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            className={`button-action ${className} ${
                isloading ? "loading" : ""
            }`}
            title={title || label}
            disabled={isDisabled || isloading}
            onClick={() => {
                if (isDisabled || isloading) return;
                onClick();
            }}
        >
            {label}
        </button>
    );
}
