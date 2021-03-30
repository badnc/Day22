import React, { Component } from 'react';

function Box(props) {
    return <h2>This is a {props.size}px Box!</h2>
}

// class Box extends Component {
//     render() {
//         return (
//             // <h2>This is a {this.props.size}px Box!</h2>
//             <BoxBox />
//         )
//     }
// }

export default Box;