import { usePlays } from '../../context/PlaysContext';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const { query, setQuery } = usePlays();
  return (
    <input
      className={`input ${styles.input}`}
      placeholder="Buscar jogada, dica, tag..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      aria-label="Buscar jogadas"
    />
  );
}
