import React,{useState} from "react";

export default function HookState(){
    const [count,setCount]=useState(0)

    const handleIncrease
     = () =>{
        setCount(count+1);
    }
    const hadleDecrease
     = () =>{
        setCount(count-1);
    }


    return(
        <div className="Container">
            <h1>{count} </h1>
            <button className="button" onClick={handleIncrease}>
                Increase
            </button>
            <button className="button" style={{backgroundColor:"bule"}} onClick={hadleDecrease}>
                Dicrease
            </button>
        </div>
    )
}

