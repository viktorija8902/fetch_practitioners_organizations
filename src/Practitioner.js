import React, { Component } from "react";

//TODO move to separate folder
//TODO make it function component
class Practitioner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.practitioner.name[0].given[0];
    const familyName = this.props.practitioner.name[0].family;
    return (
      <div>
        <div>
          {name} {familyName}
        </div>
      </div>
    );
  }
}

export default Practitioner;
