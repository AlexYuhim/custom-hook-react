import useHover from './useHover';

const style = {
  position: 'relative',
  width: '500px',
  cursor: 'pointer',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function HoverComponent() {
  const [hovered, ref] = useHover();

  return (
    <div style={style} className="wrbox" ref={ref}>
      {hovered ? 'на меня навели' : ' наведи на меня поскорее'}
    </div>
  );
}
