import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                Child:{this.props.newname}
            <button onClick={()=>this.props.pupdatename("mama")}>updateparent</button>
            </div>
        );
        
    }
}

export default Child;