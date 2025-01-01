import './App.css';
import { EventListenerComponent } from './hooks/useEventListener/EventListenerComponent';
import { ComponentWindowScroll } from './hooks/useWindowScroll/ComponentWindowScroll';

function App() {
  return (
    <>
      <EventListenerComponent />
      <ComponentWindowScroll />
    </>
  );
}

export default App;
