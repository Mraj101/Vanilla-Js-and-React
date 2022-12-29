import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { About } from './About'
import Contact from './Contact'

import Home from './HomePage'

const RouteDom = () => {
  return (
         <BrowserRouter>
            <div className='Container'>
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
            </div>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default RouteDom