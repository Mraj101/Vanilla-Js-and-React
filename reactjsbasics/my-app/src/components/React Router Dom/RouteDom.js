import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Home from './HomePage'
import Blogs from './Blogs'
import About  from './About'
import Navbar from './Navbar'
import Blog from './Blog'

const RouteDom = () => {
  return (
         <BrowserRouter>
            <div className='Container' style={{width:"600px"}}>
             {/* <nav>
                <ul>

          
                    <a href="/home">Home</a><br />
             
/////////page refreshes and makes process slow why we use Link from react-router-dom
             
                    <a href="/contact">contact</a><br />
                 
                  
                 
                    <a href="/about">contact</a><br />
                  

                </ul>
              </nav> */}
                <h1>Router Dom here... </h1>
                <h3>add /about in url</h3>
                <h3>add /contact in url</h3>
                <h3>add /home in url</h3>
              <div>
                  <Navbar/>
              </div>
            </div>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default RouteDom