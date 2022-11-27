import React from 'react';
import { useFormik } from 'formik';
import style from './form.module.css'

function App() {

  // const [user,setUser]=useState({name:"",email:"",password:"" })
  // const {name,email,password}=user

  //I will use formik here

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    
    onSubmit:(values,{resetForm})=>{
      console.log(values)
      resetForm({
        values:""
      })
    },

  })


  return (
    <div className="App">
       <form  action='' onSubmit={formik.handleSubmit} className={style.containForm} style={{      backgroundColor:"skyblue" ,color:"black"}}>
                <h1> React Form </h1>
                <div className={style.formGroup} >
                    <label htmlFor="name">Name: </label>
                    <input onChange={formik.handleChange}  type="text" id='name' name='name' value={formik.values.name}  required />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input onChange={formik.handleChange} type="email" id='email' name='email' value={formik.values.email} required/>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input onChange={formik.handleChange} type="password" id='password' name='password' value={formik.values.password} required/>
                </div>

                <button type='submit'  className = {style.formGroup} >
                    Register
                </button>

            </form>
    </div>
  );
}

export default App;
