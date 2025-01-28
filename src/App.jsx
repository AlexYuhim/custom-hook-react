import './App.css';
import { EventListenerComponent } from './hooks/useEventListener/EventListenerComponent';
import { ComponentViewportSize } from './hooks/useViewportSize/ComponentViewportSize';

function App() {
  return (
    <>
      <EventListenerComponent />
      <HoverComponent />
      <ComponentViewportSize />
    </>
  );
}

export default App;
