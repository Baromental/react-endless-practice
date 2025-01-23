import React from 'react';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChangeInput}
            value={name}
            required
          />
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChangeInput}
            value={number}
            required
          />
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
