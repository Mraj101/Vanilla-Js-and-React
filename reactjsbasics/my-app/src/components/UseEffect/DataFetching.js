import React,{useState,useEffect} from 'react'

const DataFetching = () => {
    const [todos,setTodos]=useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=> res.json())
    .then((data)=>{setTodos(data); console.log(data)})
    .catch((err)=>{console.log(err)})
    },[])
    

    const todoElement= 
        todos &&  todos.map((todo,index)=>{
         return <p key={index}> {todo.title} </p>
          })
      
  return (
    <div className='Container'>
        <h3>Data fetching through API</h3>
       {todoElement}
    
    </div>
  )
}

export default DataFetching