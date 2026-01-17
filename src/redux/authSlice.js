import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { loginThunk, registerThunk } from "../service/authThunk";
=======
import { loginThunk } from "../service/authThunk";
>>>>>>> 03d8c8cae655668dbdf0059ee784a38f273c21e6
import { createLoadingReducers } from "./commonLoadingHandlers";
const initialState = { isLoggedIn : false, username : null, loading : false, error : null, result : 0 }
const savedAuth = sessionStorage.getItem("auth")
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth? JSON.parse(savedAuth) : initialState,
    reducers : {
        login : (state, action)=>{
            state.isLoggedIn = true;
            state.username = action.payload.username
            sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout : () =>{
            sessionStorage.clear();
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder
<<<<<<< HEAD
=======
        /*
        .addCase(loginThunk.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        */
>>>>>>> 03d8c8cae655668dbdf0059ee784a38f273c21e6
        .addCase(loginThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload.result
            state.loading = false;
            state.error = null;
        })
<<<<<<< HEAD
        createLoadingReducers(builder, loginThunk);
        
        builder
        .addCase(registerThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload.result
            state.loading = false;
            state.error = null;
        })
        createLoadingReducers(builder, registerThunk);
=======
        /*
        .addCase(loginThunk.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.error.message;
        })
        */
       createLoadingReducers(builder, loginThunk)
>>>>>>> 03d8c8cae655668dbdf0059ee784a38f273c21e6
    }
});
export const {login, logout} = authSlice.actions
export default authSlice