import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete} className={styles.button}>Видалити</button>
    </div>
  );
}
