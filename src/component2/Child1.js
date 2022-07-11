import React, { Component } from 'react'

 class Child1 extends Component {
     constructor(){
         super();
         this.state={couse:''}
     }
  render() {
      return (
      <div>
        {this.props.course}
        <input placeholder='child' onChange={(e)=>this.setState({course:e.target.value})}></input>
        <button>{this.state.course}</button>
        <button onClick={()=>this.props.update(this.state.course)}>update</button>

      </div>
    )
  }
}
export default Child1;