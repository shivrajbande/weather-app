import { AIR_QUALITY_ACTIONS } from "./actions";
const fetchingState = {
  airQualityData: {
    coord: [50, 50],
    list: [
      {
        dt: 1605182400,
        main: {
          aqi: 1,
        },
        components: {
          co: 201.94053649902344,
          no: 0.01877197064459324,
          no2: 0.7711350917816162,
          o3: 68.66455078125,
          so2: 0.6407499313354492,
          pm2_5: 0.5,
          pm10: 0.540438711643219,
          nh3: 0.12369127571582794,
        },
      },
    ],
  },

  loading: false,
  error: null,
};

export function airQualityReducer(state = fetchingState, action) {
  switch (action.type) {
    case AIR_QUALITY_ACTIONS.AIR_QUALITY_REQUEST:
      return { ...state, loading: true, error: null };
    case AIR_QUALITY_ACTIONS.AIR_QUALITY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AIR_QUALITY_ACTIONS.AIR_QUALITY_SUCCESS:
      return { ...state, loading: false, airQualityData: action.payload, error: null };
    default:
      return { ...state };
  }
}
