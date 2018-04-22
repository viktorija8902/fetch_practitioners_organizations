import React, { Component } from "react";
import Practitioner from "./Practitioner.js";
import Organizations from "./Organizations.js";
import { getPractitionerByFamilyName } from "./services/api.js";

//TODO move to separate folder
class Practitioners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      loading: true,
      practitioners: []
    };
  }

  componentDidMount() {
    //TODO move fetch to services/api.js
    fetch("http://hapi.fhir.org/baseDstu3/Practitioner?family=Smith")
      .then(res => res.json())
      .then(
        result => {
          console.log("result", result);
          this.setState({
            loading: false,
            practitioners: result.entry
          });
          return result.entry;
        },
        error => {
          this.setState({
            loading: false,
            error: "Failed to get practitioners"
          });
        }
      );
  }

  render() {
    const { error, loading, practitioners } = this.state;
    if (loading) {
      return <div>Loading</div>;
    } else if (error !== "") {
      return <div>Error: {error}</div>;
    } else {
      return practitioners.map(practitioner => (
        <div>
          <Practitioner
            key={practitioner.resource.id}
            practitioner={practitioner.resource}
          />
          <Organizations organizations={practitioner.resource.extension} />
          <hr/>
        </div>
      ));
    }
  }
}

export default Practitioners;
