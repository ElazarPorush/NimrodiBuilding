import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from '../data/roles.json';

export const rolesSlice = createSlice({
    name: "role",
    initialState: "Unknown Personnel",
    reducers: {
        setRole: (state: string, action: PayloadAction<string>) => {
            if (data.includes(action.payload)) {
                state = action.payload
            }
        }
    }
})