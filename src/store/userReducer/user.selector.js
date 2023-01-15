import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer], (userReducerSlice) => userReducerSlice.currentUser 
)