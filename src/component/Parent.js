import React, { Component } from 'react';
import Child from './Child';


class Parent extends Component {
    constructor()
    {
        super();
        this.state={name:"guna"}
    }
    updatenamefromParent=()=>{
        this.setState({name:"pangu"});
    }
    updatedatafromChild=(childdata)=>{
        this.setState({name:childdata});
    }
    render() {
        return (
            <div>
                Parent:{this.state.name}
                <Child newname={this.state.name}></Child>
                <button onClick={this.updatenamefromParent}>update</button>
                <Child newname={this.state.name} pupdate name={this.updatedatafromChild}></Child>
            </div>
        );
    
    }
}

export default Parent;