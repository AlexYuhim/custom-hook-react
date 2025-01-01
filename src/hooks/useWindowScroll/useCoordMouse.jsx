import { useCallback, useRef, useState } from 'react';
import useEventListener from '../useEventListener/useEventListener';

export function useCoordMouse() {
  const [coords, setCoord] = useState({ mx: 0, my: 0 });

  const win = useRef(window);

  const cbCoordMouse = useCallback(
    ({ clientX, clientY }) => {
      setCoord({ mx: clientX, my: clientY });
    },
    [setCoord]
  );

  useEventListener('mousemove', cbCoordMouse, win);

  return coords;
}
