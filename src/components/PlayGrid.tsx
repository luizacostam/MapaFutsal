import { useState } from 'react';
import { usePlays } from '../context/PlaysContext';
import PlayCard from './PlayCard/PlayCard';
import PlayModal from './PlayModal/PlayModal';

export default function PlayGrid() {
  const { filtered } = usePlays();
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = filtered.find(p => p.id === openId) || null;

  return (
    <>
      <div className="grid">
        {filtered.map(p => (
          <PlayCard key={p.id} play={p} onOpen={setOpenId} />
        ))}
      </div>
      {selected && <PlayModal play={selected} onClose={() => setOpenId(null)} />}
    </>
  );
}
