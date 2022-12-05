import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    handleDecrement=()=>{
        return (
            this.setState({
                count: this.state.count-1
            })
         )
    }
    
    handleIncrement=()=>{
        return (
            this.setState({
                count: this.state.count+1
            })
        )
    }
  render() {
    return (
      
      <div style={{ border:"2px solid blue",width:"500px",padding:"30px" ,margin:"300px"}}>
          <h1>Used Class based Component</h1>
        <h3>
            Increament or Decrement handler
        </h3>
        <div className='state'>
        our state : {this.state.count}
        </div>
        
        <button className='btnInc' onClick={this.handleIncrement}>+</button>

        <button className='btnDic' onClick={this.handleDecrement} disabled={(this.state.count===0)?true:false} >-</button>
      </div>
    )
  }
}
