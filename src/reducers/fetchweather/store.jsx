// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import {currentWeatherReducer} from './reducer';  // Your combined reducers

const store = configureStore({
  reducer: currentWeatherReducer,
});

export default store;
