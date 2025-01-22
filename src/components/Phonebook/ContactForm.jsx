import React from 'react';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" name="name" required />
          <label htmlFor="">Number</label>
          <input type="tel" name="number" required />
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
