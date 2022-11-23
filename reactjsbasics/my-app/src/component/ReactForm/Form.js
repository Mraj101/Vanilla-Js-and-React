import React from 'react';
import style from "./form.module.css"
const ReactForm = () => {





    return (
        <div  style={{height:"100vh" ,width:"100vw" ,color:"black"}}>
            <form  action='' className={style.containForm} style={{ backgroundColor:"skyblue" ,color:"black"}}>
                <h1> React Form </h1>
                <div className={style.formGroup} >
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name='name'  required />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name='email' required/>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' required/>
                </div>
                <button className={style.formGroup}>
                    Register
                </button>

            </form>

        </div>
    );
}

export default ReactForm;
