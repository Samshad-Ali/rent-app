import { createSlice } from "@reduxjs/toolkit";
import { data,data2 } from "../../assets/data.js";
const rentDataSlice = createSlice({
    name:"dataSlice",
    initialState:{
        datas1:[],
        datas2:[],
        newData:[]
    },
    reducers:{
        getData:(state,action)=>{
            state.datas1 = data;
            state.datas2=data2
        },
        filteredData:(state,action)=>{
            let btn = action.payload.toLowerCase();
            console.log(btn)
            state.newData=[...state?.datas1,...state?.datas2]
            if(!btn){
                return state.newData
            }
            console.log(state.newData)
            state.newData = state.newData.filter((item)=>item.country===btn)
        }
    }
})

export default rentDataSlice.reducer;
export const {getData,filteredData} = rentDataSlice.actions;