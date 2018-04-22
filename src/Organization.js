import React, { Component } from "react";

//TODO move to separate folder
//TODO make it function component
class Organization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("url", this.props)
    return (<div>
      <div>{this.props.url}</div>
      <div>{this.props.name}</div>
      </div>
      )
  }
}

export default Organization;
