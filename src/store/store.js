import { createStore, combineReducers} from 'redux'
import coordinates from '../reducers/coordinates';
import weather from '../reducers/weather';

const rootReducer = combineReducers({
  coordinates,
  weather
})

const store = createStore(rootReducer)

export default store;