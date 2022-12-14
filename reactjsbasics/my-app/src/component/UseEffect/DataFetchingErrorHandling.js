import React, {useState, useEffect} from 'react'
import UseFetch from '../../customHook/UseFetch'




const DataFetchingErrorHandling = () => {
    // const [todos,setTodos]=useState(null)
    // const [isLoading,setIsLoading]=useState(true)
    // const [error,setError]=useState(null)
    const {data,error,isLoading} = UseFetch('https://jsonplaceholder.typicode.com/todos')
    
    
    
    
    
    const loadingMsg= <p>Data Loading</p>
    // useEffect(()=>{
    //  setTimeout(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((res)=> {
    //         if(!res.ok)
    //             {
    //                 throw new Error("problem fetching data")
    //                 setIsLoading(false)
    //             }
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         setTodos(data); 
    //         console.log(data)
    //         setIsLoading(false)
    //     })
    //     .catch((err)=>{
    //         setError(err.message)
    //         setIsLoading(false)
    //         console.log("hi inside",err.message)
    //     })
    //  },5000)
    // },[])
    

    const todoElement= 
        data &&  data.map((todo,index)=>{
         return <p key={index}> {todo.title} </p>
          })
      
  return (
    <div className='Container' style={{backgroundColor:"yellow"}}>
        <h3>Data fetching through API</h3>
        {error && <p style={{backgroundColor:"brown", color:"white"}}>{error}</p>}
        {isLoading && loadingMsg}
       {todoElement}
    
    </div>
  )
}

export default DataFetchingErrorHandling