import React from 'react';
import TapForm from './TapForm';
import TapDisplay from './TapDisplay';
import TapDetail from "./TapDetail";

class TapControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableTaps: [],
      selectedTap: null
    };
  }


  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.availableTaps.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddTap = (newTap) => {
    const newAvailableTaps = this.state.availableTaps.concat(newTap);
    this.setState({availableTaps: newAvailableTaps, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} onPurchase = {this.handlePurchase}/>
      buttonText = "Return to Item List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TapForm onNewTapCreation={this.handleAddTap}  />;
      buttonText = "Return to Tap List";

    }
    else {
      currentlyVisibleState = <TapDisplay tapList={this.state.availableTaps} onTapSelection={this.handleChangingSelectedTap}/>;
      buttonText = "Add Tap";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TapControl;