import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChanged = e => {
    const { value, name } = e.currentTarget;
    return this.setState({ [name]: value });
  };
  onSubmitClick = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmitClick}>
        <label className="label">
          Name
          <input
            className="input-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.onInputChanged}
          />
        </label>
        <label className="label">
          Number
          <input
            className="input-name"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.onInputChanged}
          />
        </label>
        <button className="add-button" type="submit" aria-label="add contact">
          add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;