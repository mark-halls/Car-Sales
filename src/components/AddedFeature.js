import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = { removeItem };

export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature);
