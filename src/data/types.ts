export type Formation = '3-1' | '2-2' | '4-0'| '1-2-1';
export type PlayType = 'Escanteio' | 'Falta' | 'Lateral' | 'Marcação' | 'Movimentação' | 'Transição';
export type Tag = 'movimentação'| 'defesa' | 'transição' | 'pressão' | 'finalização' | 'lateral';
export type Team = 'home' | 'away';

export interface AnimationStep {
  t: number;                 
  positions: Record<string, { x: number; y: number }>; // idJogador -> pos
  ball?: { x: number; y: number };
  note?: string;             
}

export interface PlayerData {
  team: Team;
  color?: string;
  stroke?: string;
  label?: string;
}

export interface Play {
  id: string;
  title: string;             
  type: PlayType;
  formation: Formation;
  tags: Tag[];
  keyPoints?: string[];     
  videoSrc?: string;   
  playersData?: Record<string, PlayerData>;      
  animation?: AnimationStep[]; 
  createdAt?: string;
  updatedAt?: string;
}
