import { configureStore } from "@reduxjs/toolkit";
import { accessSlice } from "./floorreducer";
import { rolesSlice } from "./Rolereducer";

export default configureStore({
    reducer: {
        access : accessSlice.reducer,
        role: rolesSlice.reducer 
    }
})

export const {
    changeStatus,
    setRole
} = {
    ...accessSlice.actions,
    ...rolesSlice.actions
}