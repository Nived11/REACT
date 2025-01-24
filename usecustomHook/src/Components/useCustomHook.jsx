import React from "react";
import { useState } from "react";

const useCustomHook = (inputhook)=>{
    const [val,setVal]=useState(inputhook);
    const increment=()=>{
        setVal(val+1);
    }
    const decrement=()=>{
        setVal(val-1);
    }
    return {val,increment,decrement};
}
export default useCustomHook;