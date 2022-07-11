import React, { Component } from 'react';

class Dec extends Component {
    render() {
        return (
            <div>
                <h1>child</h1>
                <h1>count={this.props.counting}</h1>
            </div>
        );
    }
}

export default Dec;