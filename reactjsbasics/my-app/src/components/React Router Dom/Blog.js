import React ,{ useState,useEffect }from 'react'
import { useLocation } from 'react-router-dom'

import {blogsData} from './data'

const Blog = () => {
  const location=useLocation()
  console.log(location)
    // const [blogs,setBlogs]=useState("")
    // const { title }=useParams()
 
    // useEffect(()=>{
    //     const specificData=blogsData.filter((blog)=>blog.title===title)
    //     setBlogs(specificData[0].body)
    // },[])

  return (
    <div>
        <h1>{location.state.title }</h1>
       <p>{location.state.body}</p>
    </div>

  )
}

export default Blog