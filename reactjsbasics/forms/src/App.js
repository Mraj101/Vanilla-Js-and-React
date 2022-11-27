import React,{useState} from 'react';
import './App.css';
import style from './form.module.css'

function App() {

  const [user,setUser]=useState({name:"",email:"",password:"" })
  const {name,email,password}=user

  const handleChange=(e) =>{
   
     setUser({...user, [e.target.name]:e.target.value})
 }

  const handleSubmit=(e)=>{
    console.log(user)
    e.preventDefault()
 }

  return (
    <div className="App">
       <form  action='' onSubmit={handleSubmit} className={style.containForm} style={{      backgroundColor:"skyblue" ,color:"black"}}>
                <h1> React Form </h1>
                <div className={style.formGroup} >
                    <label htmlFor="name">Name: </label>
                    <input onChange={handleChange}  type="text" id='name' name='name' value={name}  required />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleChange} type="email" id='email' name='email' value={email} required/>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handleChange} type="password" id='password' name='password' value={password} required/>
                </div>

                <button type='submit'  className = {style.formGroup} >
                    Register
                </button>

            </form>
    </div>
  );
}

export default App;
