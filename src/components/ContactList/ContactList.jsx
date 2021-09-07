import PropTypes from 'prop-types';
const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {filtered.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            onClick={() => onDeleteContact(id)}
            className="delete-button"
            type="button"
            aria-label="delete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;