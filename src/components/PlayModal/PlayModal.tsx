import { useEffect } from 'react';
import type { Play } from '../../data/types';
import VideoPlayer from '../VideoPlayer';
import BoardAnimation from '../BoardAnimation/BoardAnimation';
import styles from './PlayModal.module.css';

type Props = { play: Play; onClose: () => void };

export default function PlayModal({ play, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={play.title} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <header className={styles.header}>
          <h2>{play.title}</h2>
          <button className="btn" onClick={onClose}>Fechar</button>
        </header>

        <div className={styles.body}>
          {play.videoSrc && <VideoPlayer src={play.videoSrc} />}
          {play.animation && (
            <>
              <h3 style={{ marginTop:16 }}>Animação:</h3>
              <BoardAnimation steps={play.animation} playersData={play.playersData}/>
            </>
          )}
          {play.keyPoints?.length ? (
            <>
              <h3 style={{ marginTop:16 }}>Pontos-chave:</h3>
              <ul>
                {play.keyPoints.map((k,i)=> <li key={i}>{k}</li>)}
              </ul>
            </>
          ): null}
        </div>
      </div>
    </div>
  );
}
