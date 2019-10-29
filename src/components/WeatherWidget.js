import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WeatherLocation from './WeatherLocation';

const WeatherWidget = () => {

  const coordsRedux = useSelector((state) => state.coordinates);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {
          coords: {
            latitude,
            longitude
          } = {}
        } = position;

        const cords = {
          lat: latitude.toFixed(3),
          lng: longitude.toFixed(3)
        };
        
        dispatch({type:'SET_USER_LOCATION', userLocation:{...cords}});
      }, () =>{
        dispatch({type:'SET_ERROR', errorMsg:'Please turn on geolocation in your browser to use this app or check internet connection.'})
      },{timeout:7000}
    );
  }, [dispatch]);

  useEffect(()=> {
    if(coordsRedux.lat&&coordsRedux.lng){
      fetch(`https://api.weatherbit.io/v2.0/current?&lat=${coordsRedux.lat}&lon=${coordsRedux.lng}&key=5a0c293921ba491481e32be60f9e0783`)
        .then( response => response.json())
        .then( parsedResponse => {
          const { city_name : city, temp} = parsedResponse.data[0];
          dispatch({type:'SET_WEATHER_INFO', data:{city, temp}});
        })
        .catch( ()=> dispatch({type:'SET_ERROR', errorMsg:'Something went wrong whilst downloading data. Please check you internet connection.'}));
    }
  },[ dispatch, coordsRedux.lat, coordsRedux.lng]);

  return(
    <>
      <WeatherLocation />
    </>
  )
};

export default memo(WeatherWidget);