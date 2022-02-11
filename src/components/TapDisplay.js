import React from "react";
import Tap from "./Tap";

function TapDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap) =>
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}

export default TapDisplay;