import React, { Component } from 'react'

export default class Cycles extends Component {
    constructor(props){
      console.log("fasest clg")
        super(props);
        this.state={
            count:0,
        }
    }
    componentDidMount(){
        console.log("did mount")
    }
    componentDidUpdate(){
        console.log("ues did update")
    }
  render() {
    return (
      <div className='Container'>
        <h1>Life Cycle Methods</h1>
        {this.state.count} 
        <br />
        <button type='submit' onClick={()=>{this.setState({count:this.state.count+1})}} >Click</button>
        {console.log("cycle render")}
      </div>
    )
  }
}
