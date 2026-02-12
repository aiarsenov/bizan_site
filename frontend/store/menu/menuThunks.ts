import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMenuList } from "@/lib/api";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
    const response = await getMenuList();
    return response;
});
