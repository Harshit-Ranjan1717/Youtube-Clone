import { createSlice } from "@reduxjs/toolkit";

const resultSlice= createSlice({
    name:'result',
    initialState:[],
    reducers:{
        addMovies(state,action){
            state.push(action.payload)
        },
        removeMovies(state,action){
            return []
        }
    }
})

export const {addMovies,removeMovies}=resultSlice.actions

export default resultSlice.reducer;