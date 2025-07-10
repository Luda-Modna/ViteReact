import React, { Component } from 'react';

export default class ViewPortParams extends Component {
  constructor (props) {
    super(props);

    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }

  resizeHandler = () => {
    this.setState({ x: window.innerWidth, y: window.innerHeight });
  };

  componentDidMount () {
    window.addEventListener('resize', this.resizeHandler);
  }

  render () {
    const { x, y } = this.state;
    return (
      <div>
        Width:{x}, Height: {y}
      </div>
    );
  }
}
