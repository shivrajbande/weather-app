
import { AIR_QUALITY_ACTIONS } from "../reducers/airQuality/actions";

export const FetchAirQuality = (dispatch) => async (latitude, longitude) => {
  dispatch({ type: AIR_QUALITY_ACTIONS.AIR_QUALITY_REQUEST });
  try{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.api_key}`, {
      method: "GET",
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      dispatch({ type: AIR_QUALITY_ACTIONS.AIR_QUALITY_SUCCESS, payload: data });
    } else {
      const error = await response.text();
      dispatch({ type: AIR_QUALITY_ACTIONS.AIR_QUALITY_ERROR, payload: error });
    }
  } catch (error) {
    dispatch({ type: AIR_QUALITY_ACTIONS.AIR_QUALITY_ERROR, payload: error.message });
  }
};