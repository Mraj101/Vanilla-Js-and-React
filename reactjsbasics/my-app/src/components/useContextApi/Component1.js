import React,{ useState }from 'react'
import Component2 from './Component2'
import { useContext } from 'react'
import { UserContext } from './UserContext'
const Component1 = () => {
 const [user,setUser]=useState({
    name:"hasnain",
    id:101,
    location:"BD",
 })
  return (
    <UserContext.Provider value={user}>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1