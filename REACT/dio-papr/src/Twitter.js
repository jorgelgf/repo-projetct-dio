import React, { Component } from "react";

class Twitter extends Component {
  componentDidMount() {
    const { posts } = this.props;

    console.log("willDidMount", posts);
  }

  render() {
    const { posts } = this.props;
    console.log("render", posts);
    return <div>teste</div>;
  }
}

export default Twitter;
