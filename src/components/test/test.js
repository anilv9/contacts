import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.id,
        })
      );
  }
  //deprecated
  // componentWillMount() {
  //   console.log("component will mount");
  // }

  // componentDidUpdate() {
  //   console.log("component updated");
  // }
  //deprecated
  // componentWillUpdate() {
  //   console.log("component will update");
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        {/* <h1>Life Cycle Methods</h1> */}
        <h1>{body}</h1>
        <h1>{title}</h1>
      </div>
    );
  }
}
export default Test;
