import React, { useState, useEffect } from 'react';
import NASA from './components/NASA'
import './App.css';

function App() {

  let date = "2020-09-13"
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    setLatitude(39.8475)
    setLongitude(86.2057)
  }, []);
  
  const NASAurl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&api_key=p5Hq5QSiTwyT5KkDnyyLzZcX5NcELbtPl3a0jcSa`


  return (
    <div className="App">
      <NASA NASAurl={NASAurl} longitude={longitude} latitude = {latitude} />
    </div>
  );
}

export default App;
