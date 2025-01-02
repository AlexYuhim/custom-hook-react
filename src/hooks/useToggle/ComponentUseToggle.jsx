import { useToggle } from './useToggle';

export function ComponentUseToggle() {
  // const [value, toggle] = useToggle();
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  return (
    <div className="App">
      <header className="App-header">
        <div>{value.toString()}</div>
        <button onClick={() => toggle()}>{value.toString()}</button>
      </header>
    </div>
  );
}
