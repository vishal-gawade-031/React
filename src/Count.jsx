import { useState } from "react"

export default function Counter() {
 
    let [count,setCount]=useState(0);
    console.log("outside the function")
    let increse = () =>{
       setCount((currcount)=>{
        console.log("fist function")
        return currcount + 4;
       });
       setCount((currcount)=>{
        console.log("secound function")
        return currcount + 4;
       });
       
    }

    return(
        <div>
            <h2>Count={count}</h2>
            <button onClick={increse}>increase count</button>
        </div>
    )
}