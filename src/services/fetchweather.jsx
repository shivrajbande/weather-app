import { ACTIONS } from "../reducers/fetchweather/action";

export const Fetchweather = (dispatch) => async (credentials) => {
  dispatch({ type: ACTIONS.DATA_REQUEST });
  try {
    const response = await fetch("https://job-notification-backend.onrender.com/api/DATA", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: ACTIONS.DATA_SUCCESS, payload: data });
    } else {
      const error = await response.text();
      dispatch({ type: ACTIONS.DATA_ERROR, payload: error });
    }
  } catch (error) {
    dispatch({ type: ACTIONS.DATA_ERROR, payload: error.message });
  }
};
