import axios from "axios";

function ContactItem(props) {
  const { contact } = props;

  const handleDelete = (contactId) => {
    axios.delete(`http://localhost:8080/api/contacts/${contactId}`)
      .then(() => {
        console.log(`Deleted contact ${contactId}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.phone_number}</td>
      <td>{contact.email}</td>
      <td>{contact.website}</td>
      <td onClick={() => { handleDelete(contact.id) }}>Delete</td>
    </>
  );
}

export default ContactItem;