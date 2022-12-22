import React,{useState,useEffect} from 'react'

const InlineDynamic = () => {
    const [invalidInput,setInvalidInput]=useState(false)
    const [name,setName]=useState('')

    const handleChange=(e)=>{
        setName(e.target.value)
       
    }
    useEffect(()=>{
        if(name.length<2)
            setInvalidInput(false)
        else
            setInvalidInput(true)
    },[name])
  return (
    <div className='Container'>
        <h1> we will do dynamic inline syling</h1>
        <input style={{
            
        }} type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default InlineDynamic