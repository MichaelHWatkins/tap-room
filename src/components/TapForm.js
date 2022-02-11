import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function TapForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: event.target.amountLeft.value, id: v4()});
  }
  

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <input
          type='number'
          name='price'
          placeholder='Price' />
          <input
          type='number'
          name='alcoholContent'
          placeholder='alcoholContent' />
          <input
          type='number'
          name='amountLeft'
          placeholder='amountLeft' />
        
        <button type='submit'>Add Tap!</button>
      </form>
    </React.Fragment>
  );
}

TapForm.propTypes = {
  onNewTapCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default TapForm;