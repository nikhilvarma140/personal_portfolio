import { createSlice } from "@reduxjs/toolkit";


const stateSlice = createSlice({
    name:"state",
    initialState :{
        name:"",
        age:null,
    },
    reducers:{
        updateName:(state,action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
        },
        resetState:(state)=>{
            state.name = "";
            state.age = null
        }
    }
})

export default  stateSlice.reducer
export const {updateName,resetState}  = stateSlice.actions;