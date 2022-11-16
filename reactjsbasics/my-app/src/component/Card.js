import React from "react";

let date=new Date();
let year=date.getFullYear();
let day=date.getDate();
let month=date.getMonth();


const footer={
    margin:"10px",
    textAlign:"center",
    fontSize:"1rem",
    color: "pink",
    backgroundColor:"green",
    borderRadius:"8px",
    padding:"5px",
}
function Card(props)
{
    const{content}=props;
    return(
        <div className="Container">
            <h3 className="card-head">My Task's</h3>
            <p>{content}
            </p>
            <p style={footer}>{day+"/"+ month +"/"+ year}</p>
        </div>
    )
}

export default Card;