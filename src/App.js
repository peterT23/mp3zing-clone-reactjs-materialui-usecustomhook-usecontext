import "./App.css";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

import Container from "./componenst/Container";

function App() {
  return (
    <MusicPlayerProvider>
      <Container />
    </MusicPlayerProvider>
  );
}

export default App;
