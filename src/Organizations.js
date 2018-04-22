import React, { Component } from "react";
import Organization from "./Organization.js";


//TODO move to separate folder
//TODO use Organization component to show org
//TODO make it function component
class Organizations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const organizations = this.props.organizations;
    if (organizations !== undefined) {
      console.log("organizations", this.props.organizations);
      return (
        <div>
        {organizations[0].url}
          {/* {organizations.map(organization => {
           <Organization key={organization.url} url={organization.url} name={organization.valueReference.reference}/>
          })} */}
        </div>
      );
    } else {
      return <div>-</div>;
    }
  }
}

export default Organizations;

