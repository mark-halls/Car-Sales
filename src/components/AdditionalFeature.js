import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buyItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = { buyItem };

export default connect(
  state => state,
  mapDispatchToProps
)(AdditionalFeature);
