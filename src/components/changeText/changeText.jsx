

import React, { Component } from 'react';


class ChangeText extends Component {
  constructor(props) {
    super(props);
    this.state = { textIdx: 0, textArray: this.props.array};
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1,});
    }, this.props.time);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = this.state.textArray[this.state.textIdx % this.state.textArray.length];

    return (
        <span className={this.state.classname}>{textThatChanges}</span>
    )
  }
}

export default ChangeText;