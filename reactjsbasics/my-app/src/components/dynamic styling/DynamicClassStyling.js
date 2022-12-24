import React from 'react'

const DynamicClassStyling = () => {
    return (
        <div className='Container'>
            <h1> we will do dynamic inline syling</h1>
            <input style={{
                backgroundColor:validInput?'green':'red'
            }} type="text" value={name} onChange={handleChange} />
        </div>
      )
}

export default DynamicClassStyling