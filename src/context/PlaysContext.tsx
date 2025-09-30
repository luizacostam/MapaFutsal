import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { plays as seed } from '../data/plays';
import type { Play, PlayType, Formation, Tag, Team } from '../data/types';

type Filters = {
  type?: PlayType | 'Todos';
  formation?: Formation | 'Todas';
  tags?: Tag[];
  team?: Team | 'Ambos';
};
type Ctx = {
  plays: Play[];
  query: string;
  setQuery: (q: string) => void;
  filters: Filters;
  setFilters: (f: Filters) => void;
  filtered: Play[];
};

const C = createContext<Ctx | null>(null);

export function PlaysProvider({ children }: { children: ReactNode }) {
  const [plays] = useState<Play[]>(seed);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return plays.filter(p => {
      const okQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.keyPoints?.some(k => k.toLowerCase().includes(q));
      const okType =
        !filters.type || filters.type === 'Todos' || p.type === filters.type;
      const okForm =
        !filters.formation || filters.formation === 'Todas' || p.formation === filters.formation;
      const okTags =
        !filters.tags?.length ||
        (p.tags && filters.tags.every(t => p.tags.includes(t)));
      return okQ && okType && okForm && okTags;
    });
  }, [plays, query, filters]);

  return (
    <C.Provider value={{ plays, query, setQuery, filters, setFilters, filtered }}>
      {children}
    </C.Provider>
  );
}

export const usePlays = () => {
  const ctx = useContext(C);
  if (!ctx) throw new Error('usePlays must be used within PlaysProvider');
  return ctx;
};
