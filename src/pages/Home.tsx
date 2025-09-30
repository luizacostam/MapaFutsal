import SearchBar from '../components/SearchBar/SearchBar';
import PlayGrid from '../components/PlayGrid';

export default function Home() {
  return (
    <div className="container">
      <h1>⚽️ Mural de Jogadas — Futsal</h1>
      <SearchBar />
      <div style={{ height:16 }}></div>
      <PlayGrid />
    </div>
  );
}
