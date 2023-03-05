import React, { useEffect, useRef, useState } from "react";

const Clock=()=>{
    const [time,setTime]= useState(0);

    useEffect(()=>{
        startTime();
        return()=>clearInterval(id.current);
    },[]);

    let id=useRef();

    const startTime=()=>{
        id.current=setInterval(()=>{
            setTime((prev)=> prev + 1);
            console.log(time);
        },1000);
    }
    return(
        <>
        <h1>{time}</h1>
        </>

    )
}
export default Clock;