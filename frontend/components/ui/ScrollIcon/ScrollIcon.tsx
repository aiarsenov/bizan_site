import "./ScrollIcon.scss";

export default function ScrollIcon() {
    return (
        <div className="scroll-icon">
            <div className="scroll-icon__mouse">
                <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.307.011a8.853 8.853 0 018.398 8.841v9.852l-.012.456a8.852 8.852 0 01-8.841 8.395l-.456-.01A8.854 8.854 0 010 18.703V8.852A8.853 8.853 0 018.852 0l.455.011zm-.455 1.564a7.278 7.278 0 00-7.278 7.278v9.852a7.28 7.28 0 1014.556 0V8.852a7.278 7.278 0 00-7.278-7.277zm0 4.062c.652 0 1.18.53 1.18 1.181v2.65a1.18 1.18 0 01-2.36 0v-2.65a1.18 1.18 0 011.18-1.181z"
                        fill="#fff"
                    />
                </svg>
            </div>

            <div className="scroll-icon__arrows">
                <svg
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.935 4.004a.787.787 0 011.146 1.08L3.72 7.59a.789.789 0 01-1.146 0L.215 5.085a.787.787 0 011.144-1.08l1.788 1.897 1.788-1.898zm0-3.757a.787.787 0 011.146 1.08L3.72 3.832a.789.789 0 01-1.146 0L.215 1.327A.787.787 0 011.358.247l1.788 1.897L4.935.247z"
                        fill="#fff"
                    />
                </svg>
            </div>
        </div>
    );
}
