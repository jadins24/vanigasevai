import { createSlice } from "@reduxjs/toolkit";
import { serviceData } from "./datas/serviceData.js";


const slice=createSlice({
    name:'services', 
    initialState:{
        servicedata:serviceData,
        
        
    },
    reducers:{
        
       
    }
})


export default slice.reducer;