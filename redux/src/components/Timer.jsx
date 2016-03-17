import React from 'react';

const Timer = React.createClass({
  getInitialState() {
    return { elapsed: 0 };
  },

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.timer);
  },

  tick() {
    this.setState({ elapsed: this.state.elapsed + 1 });
  },

  render() {
    return <span>{ this.state.elapsed }</span>;
  }
});

export default Timer;
