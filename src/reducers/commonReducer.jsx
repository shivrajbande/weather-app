// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { currentWeatherReducer } from "./fetchweather/reducer";
import { weatherForcastReducer } from "./forcastWeather/reducer";
import { airQualityReducer } from "./airQuality/reducer";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    airQuality: airQualityReducer,
    weatherForcast : weatherForcastReducer,
  },
});

export default store;
