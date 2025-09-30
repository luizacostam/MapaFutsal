import type { Play } from '../../data/types';
import styles from './PlayCard.module.css';

type Props = { play: Play; onOpen: (id: string) => void };
export default function PlayCard({ play, onOpen }: Props) {
  return (
    <div className={`card ${styles.card}`} tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(play.id) }}>
      <h3>{play.title}</h3>
      <div style={{display:'flex', gap:8, flexWrap:'wrap', margin:'8px 0'}}>
        {play.tags?.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      <button className="btn" onClick={() => onOpen(play.id)} aria-label={`Abrir ${play.title}`}>Ver</button>
    </div>
  );
}
