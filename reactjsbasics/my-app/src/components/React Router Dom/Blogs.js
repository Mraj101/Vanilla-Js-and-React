import React ,{useState}from 'react'
import { Link } from 'react-router-dom'


import { blogsData } from './data'

const Blogs = () => {
  const [blogs,setBlogs]=useState(blogsData)
  const truncateString=(string,num)=>{
    if(string.length<num)
    {
      return string+"..."
    }
    else
        return string.slice(0,100)+"..."
  }
  return (
    <div>
    <h1>blogs Page</h1>
    { blogs.map((blog)=>{
      const {id , title , body}=blog
      return <article key={id} className="Container" style={{display:"inline-block"}}>
         <h1>{title}</h1>
         <p>body: {truncateString(body,100)}</p>
         <Link to={title} state={{id,title,body}}>Learn More</Link>
      </article>
    }) }
</div>
  )
}

export default Blogs
