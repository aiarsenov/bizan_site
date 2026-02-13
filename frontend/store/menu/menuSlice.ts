// store/menu/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "./menuThunks";

export type MenuItem = {
    id: number;
    attributes: {
        isVisible: boolean;
        url: string;
        title: string;
    };
};

type MenuState = {
    items: MenuItem[];
    loading: boolean;
    error: string | null;
};

const initialState: MenuState = {
    items: [],
    loading: false,
    error: null,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
});

export default menuSlice.reducer;
