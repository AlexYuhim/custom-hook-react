import { useCoordMouse } from './useCoordMouse';
import { useWindowScroll } from './useWindowScroll';

export function ComponentWindowScroll() {
  const [scroll, scrollTo] = useWindowScroll();
  const { x, y } = scroll;
  const { mx, my } = useCoordMouse();

  return (
    <div>
      <p>
        Coord mouse x: {mx}, y: {my}
      </p>
      <p>
        Scroll position x: {x}, y: {y}
      </p>
      <button onClick={() => scrollTo({ x: 510, y: 409 })}>
        Scroll to top 100px
      </button>
    </div>
  );
}
