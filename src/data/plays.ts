import { type Play } from './types';

export const plays: Play[] = [
  {
    id: 'padrao-redondo',
    title: 'Padrão Redondo',
    type: 'Movimentação',
    formation: '3-1',
    tags: ['movimentação'],
    videoSrc: '/videos/placeholder.mp4',
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 10, y: 40.0 },
                J2: { x: 90, y: 40.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 10, y: 40.0 },
                J2: { x: 90, y: 40.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 10, y: 40.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 50, y: 64.0 },
                J2: { x: 50, y: 16.0 },
                J3:  { x: 10, y: 40.0 },
                J4:  { x: 90, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
    ],
    },
    {
    id: 'fugida',
    title: 'Fugida',
    type: 'Transição',
    formation: '3-1',
    tags: ['transição', 'pressão', 'finalização'],
    keyPoints: [
        'Começa a jogada pela ala',
        'Passe rápido pelo meio para a ala oposta',
        'Avança com a bola e passa no segundo pau',
        'Quem recebe, finaliza'
    ],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 10, y: 40.0 },
                J2: { x: 90, y: 40.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 10, y: 40.0 },
                J2: { x: 90, y: 40.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 10, y: 40.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 36.0 },
                J3:  { x: 10, y: 40.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 30, y: 64.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 36.0 },
                J3:  { x: 10, y: 35.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 36.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 24.0 },
                J3:  { x: 10, y: 25.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 24.0 },
        },
        {
            t: 5,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 24.0 },
                J3:  { x: 10, y: 20.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 24.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 24.0 },
                J3:  { x: 10, y: 20.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 10, y: 20.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 90, y: 24.0 },
                J3:  { x: 10, y: 20.0 },
                J4:  { x: 90, y: 56.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 8.0 },
        },
    ],
    },
    {
    id: 'rodada',
    title: 'Rodada',
    type: 'Transição',
    formation: '3-1',
    tags: ['transição', 'pressão', 'finalização'],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 10, y: 40.0 },
                J2: { x: 90, y: 40.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
        t: 1,
        positions: {
            J1: { x: 10, y: 40.0 },
            J2: { x: 90, y: 40.0 },
            J3:  { x: 50, y: 16.0 },
            J4:  { x: 50, y: 64.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 10, y: 40.0 },
        note: 'Começa a jogada pela ala',
        },
        {
        t: 2,
        positions: {
            J1: { x: 50, y: 64.0 },
            J2: { x: 90, y: 16.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 90, y: 40.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 50, y: 64.0 },
        note: 'Carrega a bola para o meio',
        },
        {
        t: 3,
        positions: {
            J1: { x: 50, y: 64.0 },
            J2: { x: 90, y: 16.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 90, y: 56.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 90, y: 56.0 },
        note: 'Passe rápido devolvendo para a ala inicial e A2 avança',
        },
        {
        t: 4,
        positions: {
            J1: { x: 50, y: 64.0 },
            J2: { x: 90, y: 16.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 90, y: 56.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 90, y: 16.0 },
        note: 'Passe para J2 que avançou',
        },
        {
        t: 5,
        positions: {
            J1: { x: 50, y: 64.0 },
            J2: { x: 90, y: 16.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 35, y: 8.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 90, y: 16.0 },
        note: 'J4 avança para o segundo pau, na diagonal',
        },
        {
        t: 6,
        positions: {
            J1: { x: 75, y: 36.0 },
            J2: { x: 90, y: 24.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 35, y: 8.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 75, y: 36.0 },
        note: 'J1 vem para finalizar na segunda trave',
        },
        {
        t: 7,
        positions: {
            J1: { x: 75, y: 36.0 },
            J2: { x: 90, y: 24.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 35, y: 8.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 35, y: 8.0 },
        note: 'Quem recebe, finaliza',
        },
        {
        t: 8,
        positions: {
            J1: { x: 75, y: 56.0 },
            J2: { x: 90, y: 24.0 },
            J3:  { x: 10, y: 40.0 },
            J4:  { x: 35, y: 8.0 },
            G:  { x: 50, y: 76.0 },
        },
        ball: { x: 40, y: 3.0 },
        note: 'Gol! 🎉',
        },
    ],
    },
  {
    id: 'quina 2-2 com saída pelo meio',
    title: 'Quina 2-2 com saída pelo meio',
    type: 'Transição',
    formation: '2-2',
    tags: ['transição', 'pressão'],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 76.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 30, y: 64.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 35, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 40, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 5, 
            positions: {
                J1: { x: 37, y: 40.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 64.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 35, y: 40.0 },
                J2: { x: 60, y: 64.0 },
                J3:  { x: 15, y: 64.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 60, y: 64.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 30, y: 40.0 },
                J2: { x: 60, y: 64.0 },
                J3:  { x: 20, y: 64.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 20, y: 64.0 },
        },
        {
            t: 8,
            positions: {
                J1: { x: 25, y: 40.0 },
                J2: { x: 60, y: 55.0 },
                J3:  { x: 25, y: 64.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 64.0 },
        },
        {
            t: 9,
            positions: {
                J1: { x: 20, y: 40.0 },
                J2: { x: 60, y: 40.0 },
                J3:  { x: 30, y: 64.0 },
                J4:  { x: 85, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 30, y: 64.0 },
        },
        {
            t: 10,
            positions: {
                J1: { x: 20, y: 37.0 },
                J2: { x: 80, y: 40.0 },
                J3:  { x: 40, y: 64.0 },
                J4:  { x: 85, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 40, y: 64.0 }
        },
        {
            t: 11,
            positions: {
                J1: { x: 20, y: 37.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 40, y: 64.0 },
                J4:  { x: 80, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 80, y: 60.0 }
        },
        {
            t: 12,
            positions: {
                J1: { x: 20, y: 44.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 40, y: 54.0 },
                J4:  { x: 80, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 80, y: 60.0 }
        },
        {
            t: 13,
            positions: {
                J1: { x: 20, y: 57.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 30, y: 40.0 },
                J4:  { x: 70, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 60.0 }
        },
        {
            t: 14,
            positions: {
                J1: { x: 23, y: 60.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 25, y: 40.0 },
                J4:  { x: 65, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 65, y: 60.0 }
        },
        {
            t: 15,
            positions: {
                J1: { x: 25, y: 60.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 65, y: 60.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 65, y: 60.0 }
        },
        {
            t: 16,
            positions: {
                J1: { x: 25, y: 60.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 65, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 60.0 }
        },
        {
            t: 17,
            positions: {
                J1: { x: 26, y: 60.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 65, y: 50.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 26, y: 60.0 }
        },
        {
            t: 18,
            positions: {
                J1: { x: 27, y: 60.0 },
                J2: { x: 85, y: 50.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 65, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 27, y: 60.0 }
        }
    ]
  },
  {
    id: 'quina 2-2 com passe pelo meio',
    title: 'Quina 2-2 com passe pelo meio',
    type: 'Movimentação',
    formation: '2-2',
    tags: ['transição', 'pressão'],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 76.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 30, y: 64.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 30, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 35, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 40, y: 64.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 64.0 },
        },
        {
            t: 5, 
            positions: {
                J1: { x: 37, y: 40.0 },
                J2: { x: 70, y: 64.0 },
                J3:  { x: 15, y: 64.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 37, y: 40.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 35, y: 40.0 },
                J2: { x: 60, y: 40.0 },
                J3:  { x: 15, y: 40.0 },
                J4:  { x: 85, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 35, y: 40.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 30, y: 40.0 },
                J2: { x: 60, y: 20.0 },
                J3:  { x: 20, y: 20.0 },
                J4:  { x: 75, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 30, y: 40.0 },
            note: 'J1 tentou fazer o passe em J3 ou J2, mas a defesa marcou bem, então a bola volta para J4 que está mais livre',
        },
        {
            t: 8,
            positions: {
                J1: { x: 30, y: 40.0 },
                J2: { x: 70, y: 30.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 75, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 75, y: 55.0 },
            note: 'Volta para a configuração inicial'
        },
        {
            t: 9,
            positions: {
                J1: { x: 20, y: 40.0 },
                J2: { x: 80, y: 40.0 },
                J3:  { x: 25, y: 60.0 },
                J4:  { x: 70, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 55.0 },
            note: 'Continua a troca de passe até haver um espaço na defesa adversária'
        },
        {
            t: 10,
            positions: {
                J1: { x: 20, y: 40.0 },
                J2: { x: 80, y: 45.0 },
                J3:  { x: 25, y: 60.0 },
                J4:  { x: 65, y: 55.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 60.0 },
        },
        {
            t: 11,
            positions: {
                J1: { x: 20, y: 40.0 },
                J2: { x: 80, y: 50.0 },
                J3:  { x: 35, y: 60.0 },
                J4:  { x: 65, y: 45.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 35, y: 60.0 },
        },
        {
            t: 12,
            positions: {
                J1: { x: 20, y: 50.0 },
                J2: { x: 75, y: 55.0 },
                J3:  { x: 35, y: 60.0 },
                J4:  { x: 70, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 75, y: 55.0 },
        },
        {
            t: 13,
            positions: {
                J1: { x: 25, y: 60.0 },
                J2: { x: 75, y: 60.0 },
                J3:  { x: 35, y: 40.0 },
                J4:  { x: 75, y: 40.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 75, y: 60.0 },
            note: 'J2 tenta o passe em J3, mas a defesa marca bem, então a bola volta para J1 que está mais livre'
        },
        {
            t: 14,
            positions: {
                J1: { x: 25, y: 60.0 },
                J2: { x: 75, y: 40.0 },
                J3:  { x: 25, y: 40.0 },
                J4:  { x: 80, y: 50.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 60.0 },
        },
        {
            t: 15,
            positions: {
                J1: { x: 35, y: 60.0 },
                J2: { x: 75, y: 40.0 },
                J3:  { x: 25, y: 40.0 },
                J4:  { x: 80, y: 58.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 35, y: 60.0 },
        },
        {
            t: 16,
            positions: {
                J1: { x: 25, y: 60.0 },
                J2: { x: 85, y: 40.0 },
                J3:  { x: 20, y: 40.0 },
                J4:  { x: 65, y: 58.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 65, y: 58.0 }
        },
    ]
  },
  {
    id: 'Lateral com passe pela paralela',
    title: 'Lateral com passe pela paralela',
    type: 'Lateral',
    formation: '2-2',
    tags: ['transição', 'lateral'],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 15, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 4, y: 55.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 15, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 15, y: 65.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 4, y: 55.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 25, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 65.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 25, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 65.0 },
        },
        {
            t: 5,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 55, y: 65.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 65.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 70, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 55, y: 65.0 },
        },
        {
            t: 8,
            positions: {
                J1: { x: 60, y: 65.0 },
                J2: { x: 90, y: 45.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 60, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 60, y: 65.0 },
        },
        {
            t: 9,
            positions: {
                J1: { x: 60, y: 65.0 },
                J2: { x: 90, y: 35.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 50, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 35.0 },
        },
        {
            t: 10,
            positions: {
                J1: { x: 60, y: 65.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 35, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 25.0 },
        },
        {
            t: 11,
            positions: {
                J1: { x: 60, y: 65.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 35, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 35, y: 10.0 },
        },
        {
            t: 12,
            positions: {
                J1: { x: 60, y: 65.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 35, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 45, y: 5.0 },
        }
    ]
  },
  {
    id: 'Lateral com passe direto no pivô',
    title: 'Lateral com passe direto no pivô',
    type: 'Lateral',
    formation: '2-2',
    tags: ['transição', 'lateral'],
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 15, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 4, y: 55.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 15, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 15, y: 65.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 4, y: 55.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 4, y: 55.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 25, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 65.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 5, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 25, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 65.0 },
        },
        {
            t: 5,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 55, y: 65.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 90, y: 65.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 80, y: 10.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 70, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 80, y: 10.0 },
        },
        {
            t: 8,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 70, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 70, y: 25.0 },
        },
        {
            t: 9,
            positions: {
                J1: { x: 55, y: 65.0 },
                J2: { x: 70, y: 25.0 },
                J3:  { x: 5, y: 65.0 },
                J4:  { x: 80, y: 10.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 40, y: 5.0 },
        },
    ]
  },
  {
    id: 'marcação 2-2',
    title: 'Marcação 2-2',
    type: 'Marcação',
    formation: '2-2',
    tags: ['defesa'],
    playersData: {
        J1: { team: 'home', color: '#276ef3', stroke: '#1d2634', label: 'J1' },
        J2: { team: 'home', color: '#276ef3', stroke: '#1d2634', label: 'J2' },
        J3: { team: 'home', color: '#276ef3', stroke: '#1d2634', label: 'J3' },
        J4: { team: 'home', color: '#276ef3', stroke: '#1d2634', label: 'J4' },
        G:  { team: 'home', color: '#276ef3', stroke: '#1d2634', label: 'G' },
        R1: { team: 'away', color: '#e63946', stroke: '#1d2634', label: 'R1' },
        R2: { team: 'away', color: '#e63946', stroke: '#1d2634', label: 'R2' },
        R3: { team: 'away', color: '#e63946', stroke: '#1d2634', label: 'R3' },
        R4: { team: 'away', color: '#e63946', stroke: '#1d2634', label: 'R4' },
        GR: { team: 'away', color: '#e63946', stroke: '#1d2634', label: 'GR' },
    },
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 20, y: 60.0 }, J2: { x: 80, y: 60.0 }, J3:  { x: 30, y: 40.0 }, J4:  { x: 70, y: 40.0 }, G:  { x: 50, y: 76.0 },
                R1: { x: 30, y: 20.0 }, R2: { x: 70, y: 20.0 }, R3:  { x: 15, y: 50.0 }, R4:  { x: 85, y: 50.0 }, GR:  { x: 50, y: 4.0 },
            },
            ball: { x: 50, y: 4.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 20, y: 60.0 }, J2: { x: 80, y: 60.0 }, J3:  { x: 30, y: 35.0 }, J4:  { x: 70, y: 35.0 }, G:  { x: 50, y: 76.0 },
                R1: { x: 30, y: 20.0 }, R2: { x: 70, y: 20.0 }, R3:  { x: 15, y: 50.0 }, R4:  { x: 85, y: 50.0 }, GR:  { x: 50, y: 4.0 },
            },
            ball: { x: 70, y: 20.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 20, y: 60.0 }, J2: { x: 80, y: 60.0 }, J3:  { x: 50, y: 35.0 }, J4:  { x: 70, y: 30.0 }, G:  { x: 50, y: 76.0 },
                R1: { x: 30, y: 20.0 }, R2: { x: 70, y: 20.0 }, R3:  { x: 15, y: 50.0 }, R4:  { x: 85, y: 50.0 }, GR:  { x: 50, y: 4.0 },
            },
            ball: { x: 70, y: 20.0 }
        },
        {
            t: 3,
            positions: {
                J1: { x: 20, y: 60.0 }, J2: { x: 80, y: 60.0 }, J3:  { x: 30, y: 30.0 }, J4:  { x: 50, y: 30.0 }, G:  { x: 50, y: 76.0 },
                R1: { x: 30, y: 20.0 }, R2: { x: 70, y: 20.0 }, R3:  { x: 15, y: 50.0 }, R4:  { x: 85, y: 50.0 }, GR:  { x: 50, y: 4.0 },
            },
            ball: { x: 30, y: 20.0}
        },
        {
            t: 4,
            positions: {
                J1: { x: 20, y: 60.0 }, J2: { x: 80, y: 60.0 }, J3:  { x: 30, y: 55.0 }, J4:  { x: 50, y: 55.0 }, G:  { x: 50, y: 76.0 },
                R1: { x: 30, y: 45.0 }, R2: { x: 70, y: 20.0 }, R3:  { x: 15, y: 50.0 }, R4:  { x: 85, y: 50.0 }, GR:  { x: 50, y: 4.0 },
            },
            ball: { x: 15, y: 50.0 }
        }
    ]
  },
  {
    id: 'Marcação Losango',
    title: 'Marcação Losango',
    type: 'Marcação',
    formation: '1-2-1',
    tags: ['defesa'],
    playersData: {
        J1:{team:'home', color:'#276ef3', stroke:'#1d2634', label:'J1'}, 
        J2:{team:'home', color:'#276ef3', stroke:'#1d2634', label:'J2'}, 
        J3:{team:'home', color:'#276ef3', stroke:'#1d2634', label:'J3'}, 
        J4:{team:'home', color:'#276ef3', stroke:'#1d2634', label:'J4'}, 
        G: {team:'home', color:'#276ef3', stroke:'#1d2634', label:'G'},
        R1:{team:'away', color:'#e63946', stroke:'#1d2634', label:'R1'},
        R2:{team:'away', color:'#e63946', stroke:'#1d2634', label:'R2'}, 
        R3:{team:'away', color:'#e63946', stroke:'#1d2634', label:'R3'},
        R4:{team:'away', color:'#e63946', stroke:'#1d2634', label:'R4'},
        GR:{team:'away', color:'#e63946', stroke:'#1d2634', label:'GR'},
    },
    animation: [
        {
            t: 0,
            positions: {
                R4:{x:50,y:40},  R2:{x:15,y:45},  R3:{x:85,y:45},  R1:{x:50,y:65},  GR:{x:50,y:6},
                J1:{x:50,y:50},  J2:{x:25,y:57},  J3:{x:75,y:57},  J4:{x:50,y:70},  G:{x:50,y:78},
            },
            ball: { x:50,y:40 },
        },
        {
            t: 1,
            positions: {
                R4:{x:50,y:40},  R2:{x:15,y:45},  R3:{x:85,y:45},  R1:{x:40,y:65},  GR:{x:50,y:6},
                J1:{x:40,y:47},  J2:{x:20,y:52},  J3:{x:65,y:57},  J4:{x:40,y:70},  G:{x:50,y:78},
            },
            ball: { x:15,y:45 },
        },
        {
            t: 2,
            positions: {
                R4:{x:50,y:40},  R2:{x:15,y:45},  R3:{x:85,y:45},  R1:{x:50,y:65},  GR:{x:50,y:6},
                J1:{x:50,y:50},  J2:{x:25,y:57},  J3:{x:75,y:57},  J4:{x:50,y:70},  G:{x:50,y:78},
            },
            ball: { x:50,y:40 },
        },
        {
            t: 3,
            positions: {
                R4:{x:50,y:40},  R2:{x:15,y:45},  R3:{x:85,y:45},  R1:{x:60,y:65},  GR:{x:50,y:6},
                J1:{x:65,y:47},  J2:{x:35,y:57},  J3:{x:78,y:52},  J4:{x:60,y:70},  G:{x:50,y:78},
            },
            ball: { x:85,y:45 },
        },
        {
            t: 4,
            positions: {
                R4:{x:50,y:40},  R2:{x:15,y:45},  R3:{x:85,y:45},  R1:{x:50,y:65},  GR:{x:50,y:6},
                J1:{x:50,y:50},  J2:{x:25,y:57},  J3:{x:75,y:57},  J4:{x:50,y:70},  G:{x:50,y:78},
            },
            ball: { x:50,y:40 },
        },
    ],
    },
  {
    id: 'escanteio - opção 1',
    title: 'Escanteio - Opção 1 (Vick)',
    type: 'Escanteio',
    formation: '4-0',
    tags: ['movimentação', 'finalização'],
    animation: [
        {
            t: 0,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:25,y:30}, J4:{x:35,y:10}, G:{x:50,y:76},
            },
            ball: { x:95,y:4 },
        },
        {
            t:1,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:25,y:30}, J4:{x:35,y:10}, G:{x:50,y:40},
            },
            ball: { x:95,y:4 },
        },
        {
            t:2,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:25,y:30}, J4:{x:35,y:10}, G:{x:65,y:35},
            },
            ball: { x:95,y:4 },
            note: 'J2 induz a marcação, fingindo que vai receber o passe e finalizar, mas na verdade o passe é para a Vick que está entrando pelo meio',
        },
        {
            t:3,
            positions: {
                J1:{x:95,y:20}, J2:{x:35,y:15}, J3:{x:25,y:40}, J4:{x:25,y:25}, G:{x:65,y:35},
            },
            ball: { x:65,y:35 },
        },
        {
            t:4,
            positions: {
                J1:{x:95,y:20}, J2:{x:35,y:15}, J3:{x:25,y:40}, J4:{x:25,y:25}, G:{x:65,y:35},
            },
            ball: { x:37,y:4 },
        }
    ]
  },
  {
    id: 'escanteio opção 2',
    title: 'Escanteio - Opção 2',
    type: 'Escanteio',
    formation: '4-0',
    tags: ['defesa', 'finalização'],
    animation: [
        {
            t: 0,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:45,y:20}, J4:{x:55,y:10}, G:{x:50,y:76},
            },
            ball: { x:95,y:4 },
        },
        {
            t: 1,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:45,y:10}, J4:{x:55,y:20}, G:{x:50,y:76},
            },
            ball: { x:95,y:4 },
        },
        {
            t: 2,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:50,y:25}, J4:{x:65,y:7}, G:{x:50,y:76},
            },
            ball: { x:50,y:25 },
        },
        {
            t: 3,
            positions: {
                J1:{x:95,y:4}, J2:{x:85,y:25}, J3:{x:50,y:25}, J4:{x:65,y:7}, G:{x:50,y:76},
            },
            ball: { x:37,y:4 },
        }
    ]
  },
  {
    id: 'Treino de sábado: Movimentação das alas',
    title: 'Treino de sábado: Movimentação das alas',
    type: 'Movimentação',
    formation: '2-2',
    tags: ['movimentação', 'transição'],
    videoSrc: '/videos/treinosabado.mp4',
    animation: [
        {
            t: 0,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 76.0 },
        },
        {
            t: 1,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
            t: 2,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 90, y: 55.0 },
        },
        {
            t: 3,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
            t: 4,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 10, y: 55.0 },
        },
        {
            t: 5,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 64.0 },
        },
        {
            t: 6,
            positions: {
                J1: { x: 10, y: 55.0 },
                J2: { x: 90, y: 55.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 36.0 },
        },
        {
            t: 7,
            positions: {
                J1: { x: 10, y: 25.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 50, y: 16.0 },
        },
        {
            t: 8,
            positions: {
                J1: { x: 25, y: 18.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 25, y: 18.0 },
            note: 'A pivô segura a bola até que alguém chegue para dar opção de passe e finalizar'
        },
        {
            t: 9,
            positions: {
                J1: { x: 25, y: 18.0 },
                J2: { x: 90, y: 25.0 },
                J3:  { x: 50, y: 16.0 },
                J4:  { x: 50, y: 64.0 },
                G:  { x: 50, y: 76.0 },
            },
            ball: { x: 40, y: 3.0 },
        },
    ]
  }
];
