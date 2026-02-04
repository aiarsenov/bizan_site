"use client";

import { createContext, useContext, useState } from "react";

import RequestModal from "./ui/Modals/RequestModal";

type RequestModalContextType = {
    open: () => void;
    close: () => void;
};

const RequestModalContext = createContext<RequestModalContextType | null>(null);

export const RequestModalProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <RequestModalContext.Provider
            value={{
                open: () => setIsActive(true),
                close: () => setIsActive(false),
            }}
        >
            {children}

            <RequestModal isActive={isActive} />
        </RequestModalContext.Provider>
    );
};

export const useRequestModal = () => {
    const context = useContext(RequestModalContext);

    if (!context) {
        throw new Error(
            "useRequestModal должен использоваться внутри RequestModalProvider",
        );
    }

    return context;
};
