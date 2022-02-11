import React from 'react';
import TapForm from './TapForm';
import TapDisplay from './TapDisplay';

class TapControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableTaps: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  handleAddTap = (newTap) => {
    const newAvailableTaps = this.state.availableTaps.concat(newTap);
    this.setState({availableTaps: newAvailableTaps, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TapForm onNewTapCreation={this.handleAddTap}  />;
      buttonText = "Return to Tap List";

    }
    else {
      currentlyVisibleState = <TapDisplay tapList={this.state.availableTaps}/>;
      buttonText = "Add Tap";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}`</button>
      </React.Fragment>
    )
  }
}

export default TapControl;