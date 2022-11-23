import React from 'react';
import style from "./form.module.css"
const Form = () => {
    return (
        <div  style={{height:"100vh" ,width:"100vw" ,color:"black"}}>
            <div  className={style.containForm} style={{ backgroundColor:"skyblue" ,color:"black"}}>
                <h1> React Form </h1>
                <div className={style.formGroup} >
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name='name'  />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name='email'/>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password'/>
                </div>
                <button className={style.formGroup}>
                    Register
                </button>

            </div>

        </div>
    );
}

export default Form;
