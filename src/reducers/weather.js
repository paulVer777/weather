const initialState = {
  city:null,
  temp:null
}

const weatherReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch( type ){
    case 'SET_WEATHER_INFO':
      return {
        ...data
      }
      default:
        return state
  }
};

export default weatherReducer;