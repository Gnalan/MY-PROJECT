import React,{Component} from 'react';
import Child1 from './Child1';


class Parent1 extends Component{
    constructor(){
        super();
        this.state={course:"react",course2:''}
    }
    parent=()=> this.setState({course:this.state.course2})
    update=(childData)=>this.setState({course:childData})

    render(){
        return(
            <div>
            {this.state.course}<br></br>
            <input placeholder='parent' onChange={(e)=>this.setState({course2:e.target.value})}></input>
            <button onClick={this.parent}>parent</button>
            <Child1 courseName={this.state.course} update={this.update}></Child1>
            </div>
        )
    }
}
export default Parent1;