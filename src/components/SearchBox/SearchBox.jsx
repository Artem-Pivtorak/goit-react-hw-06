import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Пошук контактів"
      className={styles.input}
    />
  );
}
