import React from 'react';
import './App.css';
import Zomato from "./Components/Zomato";




function App() {
  let latitude : number = 41.5812;
  let longitude : number = -85.83;
  const zomatoURL: string = "https://developers.zomato.com/api/v2.1/search?";
  const zomatoAPIkey : string = "0257bd177b9c47d87f863746009ca10d";
  return (
    <div className="App">
     <Zomato latitude={latitude} longitude={longitude} zomatoURL={zomatoURL} zomatoAPIkey={zomatoAPIkey} />
    </div>
  );
}

export default App;
