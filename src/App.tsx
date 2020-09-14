import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './Weather';


function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    setLatitude(39.8475)
    setLongitude(86.2057)
  }, []);

  const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=089d47cbdc7d06d1a6c02d626f883233`
  return (

    <div>
      <Weather weatherURL={weatherURL} longitude={longitude} latitude={latitude} />

    </div>
  );
}

export default App;
