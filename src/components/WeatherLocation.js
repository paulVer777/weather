import React, {memo} from 'react'
import { useSelector } from 'react-redux';

const WeatherLocation = () => {
  
  const {city, temp} = useSelector((state) => state.weather);
  const {lat, lng} = useSelector((state) => state.coordinates);

  return(  
  <>
  {
   !city || !temp ? <h2>Loading...</h2> : (
     <div>
      <h2>{`User location: Lat ${lat}, Lng ${lng}`}</h2>
      <h2>{`Location Name: ${city}`}</h2>
      <h2>{`Temperature: ${temp} C`}</h2>
    </div>)
  } 
  </>)
};

export default memo(WeatherLocation);