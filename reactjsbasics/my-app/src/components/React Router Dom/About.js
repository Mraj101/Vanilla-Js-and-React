import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const naviGate=useNavigate()
  return (
    <div>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem sint nostrum enim aliquam repudiandae sit. Libero, officia dicta? Architecto similique quasi suscipit, illum fuga natus. Esse harum eum dolores deserunt vel sunt facere earum, illo magnam id cumque sapiente dicta, perspiciatis porro consequatur qui impedit nostrum sed quidem est.</p>
        <br />
        <button onClick={()=>{
          naviGate('/home')
        }} >Navigate to Home</button>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus unde quibusdam saepe vel sed minima placeat optio, eum neque enim ratione labore aperiam omnis, at eos quia tempora ipsa!</p>
    </div>
  )
}

export default About