import { useState, useRef, useCallback } from 'react';
import useEventListener from '../useEventListener/useEventListener';

export default function useHover() {
  const refElementDiv = useRef();

  const [hovered, setHovered] = useState(false);

  const handlerOver = useCallback(() => {
    setHovered(true);
  }, [setHovered]);
  const handlerOut = useCallback(() => {
    setHovered(false);
  }, [setHovered]);
  useEventListener('pointerover', handlerOver, refElementDiv);
  useEventListener('pointerout', handlerOut, refElementDiv);

  return [hovered, refElementDiv];
}
