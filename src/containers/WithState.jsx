import React, { Component } from 'react';

import WithState from './WithState.jsx'

const withState = initialState => WrappedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    render() {
        return (<WrappedComponent updateState={this.setState.bind(this)}
                                  state={this.state}
            {...this.props}/>);
    }
};

export default withState;
