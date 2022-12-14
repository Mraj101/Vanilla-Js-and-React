import React,{useState,useEffect} from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    

    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then((res)=> {
                if(!res.ok)
                    {
                        throw new Error("problem fetching data")
                    }
                return res.json()
            })
            .then((data)=>{
                setData(data); 
     
                setIsLoading(false)
            })
            .catch((err)=>{
                setError(err.message)
                setIsLoading(false)
                console.log("hi inside",err.message)
            })
         },5000)
    }, []);

    return {data,isLoading,error}


}

export default UseFetch