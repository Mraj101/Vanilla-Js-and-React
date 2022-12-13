import React ,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount]=useState(0)

useEffect(()=>{
    console.log("useeffect")
},[count])

  return (
  
    <div className='Container'>
        <h3>Use effect usage, check the console log</h3>
          {console.log("rendering")}
          <div>
          {count}
          </div>
          <button type='submit' onClick={()=>{setCount((count)=>count+1)}}>+</button>

    </div>
  )
}

export default UseEffect