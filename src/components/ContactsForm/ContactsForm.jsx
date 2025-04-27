import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert(`${name} вже є у контактах.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="name" required placeholder="Ім'я" className={styles.input} />
      <input type="tel" name="number" required placeholder="Номер телефону" className={styles.input} />
      <button type="submit" className={styles.button}>Додати контакт</button>
    </form>
  );
}
