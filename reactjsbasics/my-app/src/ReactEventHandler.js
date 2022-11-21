import React, { Component } from 'react'

export default class ReactEventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:" "
      }
    }

    const container={ 
        border:"2px solid blue",
        width:"500px",padding:"30px" ,
        margin:"300px",
        padding:"100px"
       }

 
       const onChangeHandler = (e)=>{
           this.setState({
               changedValue:e.target.value
           } )
      }
          
 render() {

    return (
        <div style={container}>
        <h1>
            Take an input plz
        </h1>
        <input onChange={this.onChangeHandler} type="text"/>
        <p>
            {this.state.changedValue}
        </p>
    </div>
    )
  }
}






