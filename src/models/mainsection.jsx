import { InvertColors,
  Compress,
  Visibility,
  DeviceThermostat, WbSunny, Nightlight } from '@mui/icons-material'

export const AirQualityModel = [
  {
    chemicalType: "CO",
    content: "270.37",
  },
  {
    chemicalType: "NO",
    content: "0.45gm/m3",
  },
  {
    chemicalType: "NO2",
    content: "6.6gm/m3",
  },
  {
    chemicalType: "O2",
    content: "94.41 ug/m3",
  },
];
// export default AirQualityModel;

export const SunriseSetModel = [
  {
    icon : WbSunny,
    timings: "10:42:12 am",
  },
  {
    icon :  Nightlight,
    timings: "17:42:12 pm",
  },
];
export const AirContentModel = [

  {
    content: "Humidity",
    quantity : "80%",
    icon : InvertColors
  },
  {
    content: "Pressure",
    quantity : "1080hPa",
    icon : Compress,
  },
  {
    content: "Visibility",
    quantity : "10Km",
    icon:Visibility
  },
  {
    content: "Feels like",
    quantity : "18.52oC",
    icon:DeviceThermostat
  },
];
