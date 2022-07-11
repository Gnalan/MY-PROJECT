import React, { Component } from 'react';
import Dec from './Dec';

class In extends Component 
{
    constructor()
    {
        super();
        this.state={count:0}
    }
    increment=()=>
    {
        this.setState({count:this.state.count+1})
    }
    decrement=()=>
    {
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>parent</h1>
                <button onClick={this.increment} >increment </button><br></br>
                <button onClick={this.decrement}>decrement</button>
                <h2>count={this.state.count}</h2>
                <br/>
                <Dec counting={this.state.count}></Dec>

            </div>
        );
    }
}

export default In;