import React from "react";
import PropTypes from "prop-types";
function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.price}</h3>
        <h3>{props.alcoholContent}</h3>
        <h3>{props.amountLeft}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  amountLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func

};
export default Tap;