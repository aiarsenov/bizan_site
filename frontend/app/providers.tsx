"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { store } from "@/store";
import { fetchMenu } from "@/store/menu/menuThunks";
import { RequestModalProvider } from "@/components/RequestModalContext";

const GlobalDataLoader = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    return <>{children}</>;
};

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <RequestModalProvider>
                <GlobalDataLoader>{children}</GlobalDataLoader>
            </RequestModalProvider>
        </Provider>
    );
}
