import React from 'react';
import "./form.module.css"
const Form = () => {
    return (
        <div  style={{height:"80vw" ,backgroundColor:"red" ,color:"black"}}>
            <div className='Container' style={{ backgroundColor:"skyblue" ,color:"black"}}>
                <h1>React Form</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name'  />
                </div>
                
                <div>
                    <label htmlFor="email">Name</label>
                    <input type="text" id='email' name='email'/>
                </div>

            </div>

        </div>
    );
}

export default Form;
