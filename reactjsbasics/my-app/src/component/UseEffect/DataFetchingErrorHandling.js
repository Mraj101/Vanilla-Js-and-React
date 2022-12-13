import React, {useState, useEffect} from 'react'


const loadingMsg= <p>Data Loading</p>

const DataFetchingErrorHandling = () => {
    const [todos,setTodos]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
     setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=> {
            if(!res.ok)
                {
                    throw new Error("problem fetching data")
                    setIsLoading(false)
                }
            return res.json()
        })
        .then((data)=>{
            setTodos(data); 
            console.log(data)
            setIsLoading(false)
        })
        .catch((err)=>{
            setError(err.messege)
        })
     },5000)
    },[])
    

    const todoElement= 
        todos &&  todos.map((todo,index)=>{
         return <p key={index}> {todo.title} </p>
          })
      
  return (
    <div className='Container' style={{backgroundColor:"yellow"}}>
        <h3>Data fetching through API</h3>
        {error && <p>{error}</p>}
        {isLoading && loadingMsg}
       {todoElement}
    
    </div>
  )
}

export default DataFetchingErrorHandling