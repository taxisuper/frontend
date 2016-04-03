import React, { Component } from 'react';

const withState = initialState => WrappedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleStateChange = this.setState.bind(this);
    }


    render() {
        return (<WrappedComponent updateState={this.handleStateChange} state={this.state} {...this.props}/>);
    }
};

export default withState;
