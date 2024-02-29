import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// import Components
import Nav from './components/views/Nav/Nav';
import Home from './components/pages/Home/Home';
import Game from './components/pages/Game/Game';
import Scores from './components/pages/Scores/Scores';
import Instruction from './components/pages/Instruction/Instruction';
import Footer from './components/views/Footer/Footer';

function App() {

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="App">
      <Nav />
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
      }}>
        <Routes  location={displayLocation}>
          <Route path="/" element={<Home/>} />
          <Route path="/game" element={<Game />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/instruction" element={<Instruction />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
