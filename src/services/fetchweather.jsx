import { CURRENT_WEATHER_ACTIONS } from "../reducers/fetchweather/action";

export const FetchCurrerntWeather = (dispatch) => async (latitude, longitude) => {
  dispatch({ type: CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_REQUEST });
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`, {
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