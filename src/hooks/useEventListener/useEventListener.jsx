import { useEffect } from 'react';

export default function useEventListener(evt, cb, el = window) {
  useEffect(() => {
    if (el == null) return;

    const handler = (e) => cb(e);

    el.addEventListener(evt, handler);

    return () => el.removeEventListener(evt, handler);
  }, [evt, cb, el]);
}
