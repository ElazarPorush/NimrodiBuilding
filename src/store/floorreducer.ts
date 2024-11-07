import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const accessSlice = createSlice({
    name: "access",
    initialState: [false, false, false, false, false],
    reducers: {
        changeAccess: (state: boolean[], action: PayloadAction<number>) => {
            state[action.payload] = !state[action.payload]
        }
    }
})