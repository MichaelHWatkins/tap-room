import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap) =>
        <Tap whenTapClicked = {props.onTapSelection}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          amountLeft={tap.amountLeft}
          whenPurchase = {props.onPurchase}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}
TapDisplay.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};
export default TapDisplay;