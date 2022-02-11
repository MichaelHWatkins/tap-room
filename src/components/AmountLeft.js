import React from "react";

function AmountLeft(props){
  onPurchase= (amountLeft) => {
    const newAmount = this.state.amountLeft - 1
    this.setState({this.state.amountLeft: newAmount});
  }
  return (
    <React.Fragment>
      <h1>{props.amountLeft}</h1>
      <button onClick={()=> onPurchase(props.amountLeft)}>Purchase</button>
    </React.Fragment>
    
  );
}

export default AmountLeft;