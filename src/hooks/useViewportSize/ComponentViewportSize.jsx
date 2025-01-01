import { useViewportSize } from './useViewportSize';

export function ComponentViewportSize() {
  const { height, width } = useViewportSize();
  return (
    <>
      Компонент ComponentViewportSize - Width: {width}, height: {height}
    </>
  );
}
