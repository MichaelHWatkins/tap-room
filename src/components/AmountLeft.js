import React from "react";

function AmountLeft(props){
  
  return (
    <React.Fragment>
      <h1>{props.amountLeft}</h1>
      <button onClick={()=> onPurchase(props.amountLeft)}>Purchase</button>
    </React.Fragment>
    
  );
}

export default AmountLeft;