import React from 'react';

const ChildComponent = (props) => {
    props.onChildData("hello, i am nanna munna child")
    return (
        <div className='Container' style={{display:"block"}}>
            I am the child component <br />
            {props.data}
        </div>
    );
}

export default ChildComponent;
