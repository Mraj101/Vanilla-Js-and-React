import React ,{useState} from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <div className='Container'>
        {toggle &&   <p className={toggle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium architecto alias, dicta harum consequuntur tempora modi, ratione ullam quos sint quo esse reprehenderit eligendi voluptate. Ad maiores laboriosam nemo! Velit ullam fuga distinctio illum id, aut laudantium at ut itaque ad excepturi neque hic, cupiditate adipisci, suscipit voluptatum sunt repellendus.
        </p>}
       
        <button onClick={()=>{setToggle(!toggle)}}>{toggle?"hide":"show"}</button>
        <span><h1>
            click here to show or hide the paragraph    
            </h1>

        </span>
    </div>
  )
}

export default Toggle