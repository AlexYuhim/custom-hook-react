import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';

export function EventListenerComponent() {
  const [key, setKey] = useState('');
  const cbKeydown = useCallback(
    (e) => {
      setKey((prev) => (prev += e.key));
    },
    [setKey]
  );

  useEventListener('keydown', cbKeydown);
  return key;
}
