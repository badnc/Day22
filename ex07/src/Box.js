import React, { Component } from 'react';

const BoxComponent = () => {
    return <h2>This is a Box Component!</h2>
}

class Box extends Component {
    render() {
        return (
            <BoxComponent />
        )
    }
}

export default Box;