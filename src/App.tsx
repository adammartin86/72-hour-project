import React, { useState, useEffect } from 'react';
import NASA from './Components/NASA'
import './App.css';
import Zomato from "./Components/Zomato";
import Weather from './Components/Weather';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function App() {
  // let latitude : number = 41.5812;
  // let longitude : number = -85.83;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const zomatoURL: string = "https://developers.zomato.com/api/v2.1/search?";
  const zomatoAPIkey : string = "0257bd177b9c47d87f863746009ca10d";
  const weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b70cccbd2f8b18ea4bee14cd72173c7b`;
  const NASAurl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2020-09-01&api_key=p5Hq5QSiTwyT5KkDnyyLzZcX5NcELbtPl3a0jcSa`
  
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
   

   const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper3: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1>Your Location: {latitude} latitude & {longitude} longitude </h1>
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper1} id="NASAdisplay"><NASA NASAurl={NASAurl} longitude={longitude} latitude = {latitude}/> </Paper>
        </Grid>
      </Grid>
        <Grid container spacing={10}>
          <Grid item xs>
            <Paper className={classes.paper2} id="weatherDisplay"><Weather weatherURL={weatherURL} longitude={longitude} latitude={latitude}/> </Paper>
          </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper3} id="foodDisplay"><Zomato latitude={latitude} longitude={longitude} zomatoURL={zomatoURL} zomatoAPIkey={zomatoAPIkey} /> </Paper>
        </Grid>
      </Grid>
      <footer>
        <p>2020 © Alison Colglazier, Adam Martin, and Jamie Coakley </p>
      </footer>
      </div>
  );
}


export default App;
