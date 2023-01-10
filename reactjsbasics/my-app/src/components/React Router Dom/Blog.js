import React ,{ useState,useEffect }from 'react'
import { useParams } from 'react-router-dom'

import {blogsData} from './data'

const Blog = () => {
    const [blogs,setBlogs]=useState("")
    const { title }=useParams()
 
    useEffect(()=>{
        const specificData=blogsData.filter((blog)=>blog.title===title)
        setBlogs(specificData[0].body)
    },[])
  return (
    <div>
        <h1> {title}</h1>
       <p>{blogs}</p>
    
    </div>

  )
}

export default Blog