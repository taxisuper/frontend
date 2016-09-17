import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = { elapsed: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ elapsed: this.state.elapsed + 1 });
  }

  render() {
    return <span>{ this.state.elapsed }</span>;
  }
}

