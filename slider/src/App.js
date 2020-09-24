import React from 'react';
import Slider from './components/Slider/Slider';
import { ImageProvider } from './components/Context/ImageContext';
function App() {
  return (
    <ImageProvider>
      <div className="App">
        <Slider />
      </div>
    </ImageProvider>
  );
}

export default App;
