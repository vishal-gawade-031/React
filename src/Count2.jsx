import { useState } from "react";

export default function counter2(){
    let [count,setCount]=useState(0);
    console.log("component is rerender");
    console.log(`count = ${count}`);

    let incCount =()=>{
        setCount(count +1);
        console.log("setcount has rerender");
    };

    return(
        <div>
            <p>count={count}</p>
            <button onClick={incCount}>increase count</button>
        </div>
    )
}