import { useHover } from './useHover';

export function HoverComponent() {
  const [hovered, ref] = useHover();
  const style = {
    width: '500px',
    cursor: 'pointer',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hovered ? '#cdcdcd' : '',
    color: hovered ? '#000' : '#fff',
  };
  return (
    <div style={style} ref={ref}>
      {hovered ? 'На меня навели мышку )' : 'Наведи мышкой на меня !'}
    </div>
  );
}
