import { FORCAST_WEATHER_ACTIONS } from "../reducers/forcastWeather/actions";

export const FetchWeatherForcast =
  (dispatch) => async (latitude, longitude) => {
    dispatch({ type: FORCAST_WEATHER_ACTIONS.FORCAST_WEATHER_REQUEST });
    try {
      const response = await fetch(
        `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=04c5c94ad19e7f079b59a54e33223f5e`,
        {
          method: "GET",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        dispatch({
          type: FORCAST_WEATHER_ACTIONS.FORCAST_WEATHER_SUCCESS,
          payload: data,
        });
      } else {
        const error = await response.text();
        dispatch({
          type: FORCAST_WEATHER_ACTIONS.FORCAST_WEATHER_ERROR,
          payload: error,
        });
      }
    } catch (error) {
      dispatch({
        type: FORCAST_WEATHER_ACTIONS.FORCAST_WEATHER_ERROR,
        payload: error.message,
      });
    }
  };
