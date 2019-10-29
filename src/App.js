import React from 'react';
import WeatherWidget from './components/WeatherWidget';

import { Provider } from 'react-redux';
import store from './store/store';

const App = () => (
  <>
  <Provider store={store}>
    <WeatherWidget />
  </Provider>
  </>
);

export default App;
