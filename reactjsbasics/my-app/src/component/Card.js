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
    const {title,content}=props;
    return(
        <div className="Container">
            <h3 className="card-head">{title}</h3>
            <p style={{padding:"10px",lineHeight:"1.5" ,fontSize:"18px",fontWeight:"350",textAlign:"justify"}}>
                {content}
            </p>
            <p style={footer}>{day+"/"+ month +"/"+ year}</p>
        </div>
    )
}

export default Card;