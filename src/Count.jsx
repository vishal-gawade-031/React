import { useState } from "react"

export default function Counter() {
 
    let [count,setCount]=useState(0);

    let increse = () =>{
       setCount(count+1);
       console.log(count);
    }

    return(
        <div>
            <h2>Count={count}</h2>
            <button onClick={increse}>increase count</button>
        </div>
    )
}