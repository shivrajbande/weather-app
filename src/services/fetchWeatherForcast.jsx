import { FORCAST_WEATHER_ACTIONS } from "../reducers/forcastWeather/actions";

export const FetchWeatherForcast =
  (dispatch) => async (latitude, longitude) => {
    dispatch({ type: FORCAST_WEATHER_ACTIONS.FORCAST_WEATHER_REQUEST });
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`,
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
