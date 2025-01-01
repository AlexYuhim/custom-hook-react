import { useRef, useState } from 'react';
import useEventListener from '../useEventListener/useEventListener';

export function useViewportSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const win = useRef(window);
  useEventListener(
    'resize',
    () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    },
    win
  );
  return windowSize;
}
