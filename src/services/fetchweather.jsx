import { CURRENT_WEATHER_ACTIONS, AIR_QUALITY_ACTIONS } from "../reducers/fetchweather/action";

export const FetchCurrerntWeather = (dispatch) => async (latitude, longitude) => {
  dispatch({ type: CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_REQUEST });
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=04c5c94ad19e7f079b59a54e33223f5e`, {
      method: "GET",
    });

    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_SUCCESS, payload: data });
    } else {
      const error = await response.text();
      dispatch({ type: CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_ERROR, payload: error });
    }
  } catch (error) {
    dispatch({ type: CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_ERROR, payload: error.message });
  }
};