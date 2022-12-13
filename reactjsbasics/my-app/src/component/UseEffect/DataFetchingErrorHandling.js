import React, {useState, useEffect} from 'react'


const [todos,setTodos]=useState(null)
const [isLoading,setIsLoading]=useState(true)
const [error,setError]=useState(null)
const loadingMsg=<p>Data Loading</p>

const DataFetchingErrorHandling = () => {
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

export default DataFetchingErrorHandling