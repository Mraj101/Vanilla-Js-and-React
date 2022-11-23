import React from 'react';

const Form = () => {
    return (
        <div className='Container' style={{display:"block" ,backgroundColor:"skyblue" ,color:"black"}}>
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
    );
}

export default Form;
