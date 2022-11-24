import React, { Component } from 'react'

export default class ReactEventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:" "
      }
    }

    

 
        onChangeHandler = (e)=>{
           this.setState({
               changedValue:e.target.value
           } )
      }
          

   

 render() {
    const container={ 
        border:"2px solid blue",
        width:"40vw",padding:"30px" ,
        margin:"300px",
        padding:"100px"
       }
       
    return (
        <div style={container}>
        <h1>
            onChange Handler(event.target.value)
        </h1>
        <h3>Take an input Plz</h3>
        <input onChange={this.onChangeHandler} type="text"/>
        <p>
            {this.state.changedValue}
        </p>
    </div>
    )
  }
}






