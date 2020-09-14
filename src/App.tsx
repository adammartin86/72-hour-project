import React from 'react';
import NASA from './components/NASA'
import './App.css';

function App() {

  let latitude : number = 41.5812;
  let longitude : number = -85.83;

  const NASAurl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${Date}&api_key=p5Hq5QSiTwyT5KkDnyyLzZcX5NcELbtPl3a0jcSa`


  return (
    <div className="App">
      <NASA NASAurl={NASAurl} longitude={longitude} latitude = {latitude} />
    </div>
  );
}

export default App;
