import React,{useState} from 'react';
import style from "./form.module.css"
const ReactForm = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleName=(e)=>{
        setName(e.target.value)

    }
     const handleEmail=(e)=>{
        setEmail(e.target.value)

    } 
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        let formInfo={
            name,
            email,
            password,
        }
        console.log(formInfo)
        e.preventDefault()
    }



    return (
        <div  style={{height:"100vh" ,width:"100vw" ,color:"black"}}>
            <form  action='' onSubmit={handleSubmit} className={style.containForm} style={{ backgroundColor:"skyblue" ,color:"black"}}>
                <h1> React Form </h1>
                <div className={style.formGroup} >
                    <label htmlFor="name">Name: </label>
                    <input onChange={handleName}  type="text" id='name' name='name'  required />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleEmail} type="email" id='email' name='email' required/>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handlePassword} type="password" id='password' name='password' required/>
                </div>
                <button className={style.formGroup}>
                    Register
                </button>

            </form>

        </div>
    );
}

export default ReactForm;
