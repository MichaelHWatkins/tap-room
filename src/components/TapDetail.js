import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const {tap} = props;
  return (
    <React.Fragment>
      <h3>{tap.name}</h3>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
}


export default TapDetail;