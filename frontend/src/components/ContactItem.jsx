function ContactItem(props) {
  const { contact } = props;

  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.phone_number}</td>
      <td>{contact.email}</td>
      <td>{contact.website}</td>
    </>
  );
}

export default ContactItem;