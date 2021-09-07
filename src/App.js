import { Component } from "react";
import id from "short-id";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (text) => {
    if (this.onCheckContactAlready(text)) {
      return alert(`${text.name} is already in contacts`);
    }
    const contact = { id: id.generate(), ...text };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };
  deleteContact = (contactId) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter((cont) => cont.id !== contactId),
      };
    });
  };

  onFilterChanged = (e) => {
    const { value } = e.currentTarget;
    return this.setState({ filter: value });
  };

  onCheckContactAlready = (text) => {
    const { contacts } = this.state;
    return contacts.some((contact) => contact.name === text.name);
  };
  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChanged} />
        <ContactList
          filtered={this.onFilterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
