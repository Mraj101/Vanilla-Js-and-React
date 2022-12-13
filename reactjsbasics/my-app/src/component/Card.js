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

const styleContent={
    padding:"10px",
    lineHeight:"1.5",
    fontSize:"18px",
    fontWeight:"350",
    textAlign:"justify",
    
}

function Card(props)
{
    const {title,content}=props;
    return(
        <div className={['Container-cards']}>
            <h3 className="card-head">{title}</h3>
            <p style={styleContent}>
                {content}
            </p>
            <p style={footer}>{day+"/"+ month +"/"+ year}</p>
        </div>
    )
}

export default Card;