import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data.js";
const rentDataSlice = createSlice({
    name:"dataSlice",
    initialState:{
        data:[],
        filteredData:[]
    },
    reducers:{
        getData:(state,action)=>{
            state.data=data;
        },
        filteredData:(state,action)=>{
            let btn = action.payload.toLowerCase();
            if(!btn){
                return state.data;
            }else{
             state.filteredData = state.data.filter((item)=>item.country===btn)
            }
        }
    }
})

export default rentDataSlice.reducer;
export const {getData,filteredData} = rentDataSlice.actions;