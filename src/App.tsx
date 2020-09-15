import React, { useState, useEffect } from 'react';
import NASA from './Components/NASA'
import './App.css';
import Zomato from "./Components/Zomato";
import Weather from './Components/Weather';



function App() {
  // let latitude : number = 41.5812;
  // let longitude : number = -85.83;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const zomatoURL: string = "https://developers.zomato.com/api/v2.1/search?";
  const zomatoAPIkey : string = "0257bd177b9c47d87f863746009ca10d";
  const weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b70cccbd2f8b18ea4bee14cd72173c7b`;
  const NASAurl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&api_key=p5Hq5QSiTwyT5KkDnyyLzZcX5NcELbtPl3a0jcSa`
  
useEffect(() => {
  getLocation();
}, []);

const getLocation = () => {
 if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition)
     } else {
       alert("Geolocation not supported by browser");
     }
   }
   const showPosition = (position: any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(`just set latitude to ${position.coords.latitude} and longitude to ${position.coords.longitude}`)
   }
  
  return (
    <div className="App">
      <h1>You are currently located at {latitude} latitude & {longitude} longitude. </h1>
        <Weather weatherURL={weatherURL} longitude={longitude} latitude={latitude}/>
        <Zomato latitude={latitude} longitude={longitude} zomatoURL={zomatoURL} zomatoAPIkey={zomatoAPIkey} />
        <NASA NASAurl={NASAurl} longitude={longitude} latitude = {latitude} />
      </div>
  );
}

export default App;
