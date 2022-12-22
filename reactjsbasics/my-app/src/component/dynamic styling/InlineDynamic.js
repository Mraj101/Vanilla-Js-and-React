import React,{useState,useEffect} from 'react'

const InlineDynamic = () => {
    const [validInput,setvalidInput]=useState(false)
    const [name,setName]=useState('')

    const handleChange=(e)=>{
        setName(e.target.value)
       
    }
    useEffect(()=>{
        if(name.length<2)
            setvalidInput(false)
        else
            setvalidInput(true)
    },[name])
  return (
    <div className='Container'>
        <h1> we will do dynamic inline syling</h1>
        <input style={{
            backgroundColor:validInput?'green':'red'
        }} type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default InlineDynamic