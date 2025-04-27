import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';


export default function App() {
  return (
    <div >
      <h1>Книга контактів</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
