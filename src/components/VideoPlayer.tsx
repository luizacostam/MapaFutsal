type Props = { src: string };
export default function VideoPlayer({ src }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <video
        src={src}
        controls
        style={{ width: '70%', borderRadius: 12, border: '1px solid #1d2634' }}
        aria-label="Reprodução da jogada"
      />
    </div>
  );
}
