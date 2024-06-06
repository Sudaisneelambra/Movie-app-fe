import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    users:null,
    admin:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action) =>{
            state.users =action.payload
            console.log(state.users);
        },
        setAdmin:(state,action)=>{
            state.admin = action.payload
        }
    }
})

export const {setUser,setAdmin} =userSlice.actions

export const selectUser = state => state.user.users;
export const selectAdmin = state => state.user.admin;

export default userSlice.reducer;