import { CURRENT_WEATHER_ACTIONS } from "./action";
const fetchingState = {
  data: {
    coord: {
      lon: 78.477,
      lat: 17.406,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    base: "stations",
    main: {
      temp: 300.25,
      feels_like: 302.54,
      temp_min: 299.75,
      temp_max: 300.25,
      pressure: 1011,
      humidity: 74,
      sea_level: 1011,
      grnd_level: 953,
    },
    visibility: 6000,
    wind: {
      speed: 2.06,
      deg: 210,
    },
    clouds: {
      all: 40,
    },
    dt: 1727538362,
    sys: {
      type: 1,
      id: 9214,
      country: "IN",
      sunrise: 1727483749,
      sunset: 1727527051,
    },
    timezone: 19800,
    id: 1269843,
    name: "Hyderabad",
    cod: 200,
  },
  loading: false,
  error: null,
};

export function currentWeatherReducer(state = fetchingState, action) {
  console.log("action is ",action.type);
  switch (action.type) {
    case CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };
    case CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CURRENT_WEATHER_ACTIONS.CURRENT_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    default:
      return { ...state };
  }
}
