import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        return (
            this.setState={
                count:this.count+1
            }
        )
    }
    handleDecrement=()=>{
        return (
            this.setState={
                count: this.count-1
            }
        )
    }
  render() {
    return (
      <div style={{ border:"2px solid blue",width:"500px",padding:"30px" ,margin:"100px"}}>
        <h3>
            Increament or Decrement handler
        </h3>
        <div className='state'>
        our state : {this.state.count}
        </div>
        <button style={{margin:"30px",padding:"20px" ,width:"100px",backgroundColor:"green" ,borderRadius:"10px"}} onClick={this.handleIncrement}>+</button>
        <button  style={{margin:"30px",padding:"20px" ,width:"100px",backgroundColor:"blue" ,borderRadius:"10px"}}onClick={this.handleDecrement} >-</button>
      </div>
    )
  }
}
