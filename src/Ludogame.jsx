import { useState } from "react"

export default function LudoBord(){

let [moves,setMoves]= useState({blue:0,yellow:0,green:0,red:0});

let UpdateBlue = ()=>{
    console.log(`moves ${moves.blue}`);
    setMoves((prevMoves)=>{
        return { ...prevMoves,blue: prevMoves.blue + 1 }
    })
}
    let Up = ()=>{
        console.log(`moves ${moves.yellow}`);
        setMoves((prevMoves)=>{
            return { ...prevMoves,yellow: prevMoves.yellow + 1 }
        });

}

    return(
        <>
        <p>game bagin</p>
        <div className="bord">
          <p>blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={UpdateBlue}>+1</button>

            <p>yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={Up}>+1</button>

            <p>green moves={moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>

            <p>red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
        </div>
        </>
    )
}