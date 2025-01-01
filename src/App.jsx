import './App.css';
import { EventListenerComponent } from './hooks/useEventListener/EventListenerComponent';
import { ComponentViewportSize } from './hooks/useViewportSize/ComponentViewportSize';

function App() {
  return (
    <>
      <EventListenerComponent />
      <ComponentViewportSize />
    </>
  );
}

export default App;
