import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {useId}=useParams()
  return (
    <div>
        <h1>Hi i am user</h1>
        <p>{useId}</p>
    </div>
  )
}

export default User