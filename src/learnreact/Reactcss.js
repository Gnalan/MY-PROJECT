import React, { Component } from 'react';
import'./Style.css';

class Reactcss extends Component {
    render() {
        const mystyle={
            color:"blue",
            fontFamily:"Arial"
        };
        return (
            <div>
                <h1 style={{color:"red",textAlign:"center"}}>Hello world</h1>
                <h2 style={mystyle}>welcome</h2>
                <h3 className='Style'>Thank you</h3>
            </div>
        )
    }
}
export default Reactcss;