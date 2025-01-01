import { useCallback, useState, useRef } from 'react';
import useEventListener from '../useEventListener/useEventListener';

export function useWindowScroll() {
  const win = useRef(window);

  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const updateScrollPositionscrollX = useCallback(() => {
    setScroll((prev) => ({ ...prev, x: window.scrollX }));
  }, [setScroll]);

  const updateScrollPositionscrollY = useCallback(() => {
    setScroll((prev) => ({ ...prev, y: window.scrollY }));
  }, [setScroll]);

  useEventListener('scroll', updateScrollPositionscrollX, win);
  useEventListener('scroll', updateScrollPositionscrollY, win);

  const scrollTo = ({ x, y }) => {
    window.scrollTo(x, y);
  };

  return [scroll, scrollTo];
}
