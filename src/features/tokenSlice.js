import { createSlice } from "@reduxjs/toolkit";

const userToken = createSlice({
    name : 'auth',
    initialState : {
        token : null,
    },
    reducers : {
        setToken : (state,action) =>{
            state.token = action.payload
        },
        removeToken : (state) =>{
            state.token = null
        }
    }
})

export const { setToken , removeToken } = userToken.actions

export const selectToken = (state) => state.auth.token

export default userToken.reducer