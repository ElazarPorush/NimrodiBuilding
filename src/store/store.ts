import { configureStore } from "@reduxjs/toolkit";
import { accessSlice } from "./floorreducer";
import { rolesSlice } from "./rolereducer";

export default configureStore({
    reducer: {
        access : accessSlice.reducer,
        role: rolesSlice.reducer 
    }
})

export const {
    changeAccess,
    setRole
} = {
    ...accessSlice.actions,
    ...rolesSlice.actions
}