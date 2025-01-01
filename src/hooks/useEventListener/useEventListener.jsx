import { useEffect } from 'react';

export default function useEventListener(
  evt,
  cb,
  ref = { current: undefined }
) {
  useEffect(() => {
    const el = ref.current;
    if (el == null) return;

    const handler = (e) => cb(e);

    el.addEventListener(evt, handler);

    return () => el.removeEventListener(evt, handler);
  }, [evt, cb, ref]);
}
