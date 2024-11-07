import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from '../data/roles.json';

export const rolesSlice = createSlice({
    name: "role",
    initialState: "Unknown Personnel",
    reducers: {
        setRole: (state: string, action: PayloadAction<number>) => {
            if (action.payload >= 0 && action.payload <= 4) {
                state = data[action.payload]
            }
            return state
        }
    }
})