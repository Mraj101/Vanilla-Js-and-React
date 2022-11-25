import React,{useState} from 'react';
import style from "./form.module.css"
const ReactForm = () => {

     //we can initialize name,email,password by hardcoding like this or we can also pass objects inside the "useState function"
    // const [name,setName]=useState('')
    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')

    /* 

    /////// here we can see we used so many functiorns using a single handler for a single input feild, we can reduce these functions

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

   */



/////////another way of doing things.



// const [user,setUser]=useState({
//  name:"",email:"",password:""
// })

// const {name, email, password} = user;

// const handleName= (e) =>{
//     setUser({ name:e.target.value, email, password})
// }

// const handleEmail= (e)=>{
//     setUser({name, email:e.target.value, password})
// }

// const handlePassword= (e)=>{
//     setUser({name, email, password:e.target.value})
// }

// const handleSubmit= (e)=>{
//     console.log("form is submitted")
//     console.log(user)
//     e.preventDefault()
// }






///proper way is to define 1 handle change method and call it on on every input field and retrieve that data from there

///
const [user,setUser]=useState({name:"",email:"",password:"" })
const {name,email,password}=user

const handleChange=(e) =>{
   /* if(fieldName==="name"){
        setUser({name:e.target.value,email,password})
    }
     if(fieldName==="email"){
        setUser({name,email:e.target.value,password})
    } 
    if(fieldName==="password"){
        setUser({name,email,password:e.target.value})
    }*/

    setUser({...user, [e.target.name]:e.target.value})

}
 const handleSubmit=(e)=>{
    console.log(user)
    e.preventDefault()
 }


 
    return (
        <div  style={{height:"100vh" ,width:"100vw" ,color:"black",marginBottom:"50px"}}>
            <h1>The Data retrived from this FORM uses manual name setInfo for every input , which can be done by a single handler funcion </h1>
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

export default ReactForm;
