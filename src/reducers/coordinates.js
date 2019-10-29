const initialState = {
  lat:null,
  lng:null
}

const coordsReducer = (state = initialState, action) => {
  const { type, userLocation} = action;
  switch( type ){
    case 'SET_USER_LOCATION':
      return {
        ...userLocation
      }
      default:
        return state
  }
};

export default coordsReducer;