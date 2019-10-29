import { createStore, combineReducers} from 'redux'
import coordinates from '../reducers/coordinates';
import weather from '../reducers/weather';
import errors from '../reducers/errors';

const rootReducer = combineReducers({
  coordinates,
  weather,
  errors
})

const store = createStore(rootReducer)

export default store;