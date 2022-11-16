import React from "react";

let date=new Date();
let year=date.getFullYear();
let day=date.getDate();
let month=date.getMonth();


const footer={
    textAlign:"center",
    fontSize:"1rem",
    color: "yellow"
}
function Card()
{
    return(
        <div className="Container">
            <h3 className="card-head">My Task's</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptates, ducimus quam deleniti similique sapiente facere debitis aperiam commodi consectetur amet aut quidem doloremque! Est inventore sequi natus odit? Quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, soluta. Ab quis quos nobis suscipit accusamus dolorum est voluptatum voluptatem!
            </p>
            <p style={footer}>{day+"/"+ month +"/"+ year}</p>
        </div>
    )
}

export default Card;