"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";
import { fetchMenu } from "@/store/menu/menuThunks";
import { RequestModalProvider } from "@/components/RequestModalContext";

const GlobalDataLoader = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    return children;
};

export function AppProviders({ children }) {
    return (
        <Provider store={store}>
            <RequestModalProvider>
                <GlobalDataLoader>{children}</GlobalDataLoader>
            </RequestModalProvider>
        </Provider>
    );
}
