import { useEffect, useRef, useState } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const refElementDiv = useRef();

  const hendleDown = () => setHovered(true);
  const hendleOut = () => setHovered(false);

  useEffect(() => {
    if (refElementDiv === null) return;
    refElementDiv.current.addEventListener('mouseover', hendleDown);
    refElementDiv.current.addEventListener('mouseout', hendleOut);

    return () => {
      refElementDiv.current.removeEventListener('mouseover', hendleDown);
      refElementDiv.current.removeEventListener('mouseout', hendleOut);
    };
  }, [refElementDiv.current]);
  return [hovered, refElementDiv];
}
