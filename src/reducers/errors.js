const initialState = {
  error: null
}

const errors = (state = initialState, action) => {
  const { type, errorMsg} = action;
  switch( type ){
    case 'SET_ERROR':
      return {
        error:errorMsg
      }
      default:
        return state
  }
};

export default errors;