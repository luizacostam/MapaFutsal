import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { AnimationStep } from '../../data/types';

type Props = {
  steps: AnimationStep[];
  loop?: boolean;        
  initialSpeed?: number; // 0.5, 1, 1.5...
  playersData?: Record<string, { team: 'home' | 'away'; color?: string; stroke?: string; label?: string }>;
};

const FIELD_W = 100;
const FIELD_H = 80;

// Helpers ---------------------------------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function formatTime(sec: number) {
  const s = Math.floor(sec % 60);
  const m = Math.floor(sec / 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function colorFor(pid: string, data?: Props['playersData']) {
  const m = data?.[pid];
  if (m?.color) return m.color;
  if (m?.team === 'away') return '#e5484d';
  return '#276ef3ff';
}
function strokeFor(pid: string, data?: Props['playersData']) {
  const m = data?.[pid];
  if (m?.stroke) return m.stroke;
  if (m?.team === 'away') return '#7a1d20';
  return '#276ef3ff';
}
function labelFor(pid: string, data?: Props['playersData']) {
  return data?.[pid]?.label ?? pid;
}

/**
 * Dado um tempo t e a lista de steps (ordenada por t),
 * encontra o par [i, i+1] que "abraça" t e retorna o alpha 0..1.
 */
function getSegment(steps: AnimationStep[], t: number) {
  if (steps.length === 1) return { i0: 0, i1: 0, alpha: 0 };
  // Garantir ordem por tempo
  const ordered = steps.slice().sort((a, b) => a.t - b.t);

  // Antes do primeiro ou depois do último
  if (t <= ordered[0].t) return { i0: 0, i1: 0, alpha: 0 };
  if (t >= ordered[ordered.length - 1].t) {
    const last = ordered.length - 1;
    return { i0: last, i1: last, alpha: 0 };
  }

  // Encontra intervalo
  for (let i = 0; i < ordered.length - 1; i++) {
    const a = ordered[i];
    const b = ordered[i + 1];
    if (t >= a.t && t <= b.t) {
      const span = b.t - a.t || 1;
      const alpha = (t - a.t) / span;
      return { i0: i, i1: i + 1, alpha };
    }
  }
  // fallback (não deve chegar aqui)
  return { i0: 0, i1: 0, alpha: 0 };
}

/**
 * Interpola posições de jogadores e bola entre dois steps.
 * Assume coordenadas em 0..100.
 * Se um id existir em A mas não em B (ou vice-versa), usa a posição existente.
 */
function interpolateFrame(a: AnimationStep, b: AnimationStep, alpha: number) {
  const ids = new Set([
    ...Object.keys(a.positions),
    ...Object.keys(b.positions),
  ]);

  const positions: Record<string, { x: number; y: number }> = {};
  ids.forEach((id) => {
    const pa = a.positions[id] ?? b.positions[id];
    const pb = b.positions[id] ?? a.positions[id];
    positions[id] = {
      x: lerp(pa.x, pb.x, alpha),
      y: lerp(pa.y, pb.y, alpha),
    };
  });

  // Bola (se existir em ambos, interpola; se existir só em um, usa aquele)
  let ball: { x: number; y: number } | undefined = undefined;
  if (a.ball && b.ball) {
    ball = { x: lerp(a.ball.x, b.ball.x, alpha), y: lerp(a.ball.y, b.ball.y, alpha) };
  } else if (a.ball) {
    ball = { x: a.ball.x, y: a.ball.y };
  } else if (b.ball) {
    ball = { x: b.ball.x, y: b.ball.y };
  }

  // Nota (mostra a do step "destino" quando alpha>0, senão a do atual)
  const note = alpha > 0.5 ? b.note : a.note;

  return { positions, ball, note };
}

// Componente ------------------------------------------

export default function BoardAnimation({ steps, loop = true, initialSpeed = 1, playersData }: Props) {
  // --- Pré-cálculos
  const ordered = useMemo(() => steps.slice().sort((a, b) => a.t - b.t), [steps]);
  const duration = ordered.length ? ordered[ordered.length - 1].t : 0;

  // --- Estado do player
  const [time, setTime] = useState(0);                // em segundos
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);   // 0.5, 1, 1.5, 2...
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // --- Cálculo do frame atual (interpola entre dois steps)
  const currentFrame = useMemo(() => {
    if (!ordered.length) return null;
    const { i0, i1, alpha } = getSegment(ordered, time);
    const a = ordered[i0];
    const b = ordered[i1];
    return interpolateFrame(a, b, alpha);
  }, [ordered, time]);

  // --- Loop de animação
  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      return;
    }

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dtMs = ts - lastTsRef.current;
      lastTsRef.current = ts;

      const dtSec = (dtMs / 1000) * speed;
      setTime((prev) => {
        const next = prev + dtSec;
        if (next >= duration) {
          return loop ? 0 : duration;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [playing, speed, duration, loop]);

  // --- Controles
  const togglePlay = () => setPlaying((p) => !p);

  const jumpTo = (t: number) => {
    setTime(clamp(t, 0, duration));
  };

  const stepPrev = () => {
    if (!ordered.length) return;
    // encontra o step imediatamente anterior ao tempo atual
    const prevStep = [...ordered].reverse().find((s) => s.t < time);
    jumpTo(prevStep ? prevStep.t : 0);
  };

  const stepNext = () => {
    if (!ordered.length) return;
    const nextStep = ordered.find((s) => s.t > time);
    jumpTo(nextStep ? nextStep.t : duration);
  };

  // --- Render
  if (!ordered.length || !currentFrame) {
    return (
      <div style={{ background:'#0f151d', border:'1px solid #1d2634', borderRadius:12, padding:12 }}>
        <div style={{ color:'#9fb1c6' }}>Sem frames para animar.</div>
      </div>
    );
  }

  const players = Object.keys(currentFrame.positions);

  return (
    <div style={{ background:'#0f151d', border:'1px solid #1d2634', borderRadius:12, padding:12, maxWidth: 800, margin:'0 auto' }}>
      {/* Campo */}
      <svg viewBox={`0 0 ${FIELD_W} ${FIELD_H}`} style={{ width:'100%', height:'auto', display:'block' }}>
        <rect x={0} y={0} width={FIELD_W} height={FIELD_H} rx={2} fill="#0b0f14" stroke="#223043" />
        <line x1={0} y1={FIELD_H/2} x2={FIELD_W} y2={FIELD_H/2} stroke="#223043" strokeDasharray="2 2" />
        <circle cx={FIELD_W/2} cy={FIELD_H/2} r={4} stroke="#223043" fill="transparent" />

        {/* Jogadoras (interpoladas) */}
        {players.map((pid) => {
          const pos = currentFrame.positions[pid];
          return (
            <motion.g key={pid} initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}>
              <circle cx={pos.x} cy={pos.y} fontSize={2.6} r={3.0} fill={colorFor(pid, playersData)} stroke={strokeFor(pid, playersData)} strokeWidth={0.6} />
              <text x={pos.x} y={pos.y-6} fontSize={3} textAnchor="middle" fill="#9fb1c6">{labelFor(pid, playersData)}</text>
            </motion.g>
          );
        })}

        {/* Bola (interpolada) */}
        {currentFrame.ball && (
          <motion.circle
            cx={currentFrame.ball.x} cy={currentFrame.ball.y} r={2.0}
            fill="#e9f1ff"
            initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
          />
        )}
      </svg>

      {/* Nota contextual (se houver) */}
      {currentFrame.note && (
        <div style={{ marginTop:8, fontSize:14, color:'#9fb1c6' }}>ℹ️ {currentFrame.note}</div>
      )}

      {/* Controles */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'auto 1fr auto',
        gap:12, alignItems:'center', marginTop:12
      }}>
        {/* Botões */}
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <button className="btn" onClick={stepPrev} aria-label="Voltar para o frame anterior">⏮️</button>
          <button className="btn" onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Reproduzir'}>
            {playing ? '⏸️' : '▶️'}
          </button>
          <button className="btn" onClick={stepNext} aria-label="Avançar para o próximo frame">⏭️</button>
        </div>

        {/* Slider de tempo */}
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ color:'#9fb1c6', fontSize:12, width:40, textAlign:'right' }}>{formatTime(time)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            style={{ width:'100%' }}
            aria-label="Linha do tempo da jogada"
          />
          <span style={{ color:'#9fb1c6', fontSize:12, width:40 }}>{formatTime(duration)}</span>
        </div>

        {/* Velocidade */}
        <div style={{ display:'flex', gap:8, alignItems:'center', justifyContent:'flex-end' }}>
          <label htmlFor="speed" style={{ color:'#9fb1c6', fontSize:12 }}>Velocidade</label>
          <select
            id="speed"
            className="input"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            style={{ width:90, padding:'6px 8px' }}
            aria-label="Velocidade de reprodução"
          >
            <option value={0.5}>0.5×</option>
            <option value={0.75}>0.75×</option>
            <option value={1}>1×</option>
            <option value={1.25}>1.25×</option>
            <option value={1.5}>1.5×</option>
            <option value={2}>2×</option>
          </select>
        </div>
      </div>
    </div>
  );
}
