import React from 'react';

const ChildComponent = (props) => {
    props.onChildData("hello, i am nanna munna child")
    return (
        <div className='Container' style={{display:"block",fontWeight:"800"}}>
            I am the component fetched from child <br />
            {props.data}
        </div>
    );
}

export default ChildComponent;
