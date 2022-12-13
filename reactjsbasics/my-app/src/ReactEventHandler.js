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
        backgroundColor:"red",
       }
       
    return (
        <div  style={container} className="Container">
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






