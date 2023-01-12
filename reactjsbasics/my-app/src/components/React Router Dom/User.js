import React from 'react'
// import { useParams} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    // const {useId}=useParams()
    const [title,setTitle]=useSearchParams()
 
    console.log(title.get("id"))
  return (
    <div>
        <h1>Hi i am user</h1>
        <p>{title.get("id")}</p>
    </div>
  )
}

export default User