import React from "react";
import { Box, Typography } from "@mui/material";
import {
  AirQualityModel,
  SunriseSetModel,
  AirContentModel,
} from "../models/mainsection";
import { Air } from "@mui/icons-material";
import { useSelector } from "react-redux";

import {
  InvertColors,
  Compress,
  Visibility,
  DeviceThermostat,
  WbSunny,
  Nightlight,
} from "@mui/icons-material";

function MainSection() {
  const { data, error, loading } = useSelector((state) => state.currentWeather);
  const { airQualityData } = useSelector((state) => state.airQuality);

  // if (!data.main || !airQualityData.list) {
  //   return <div>Loading...</div>;  // Placeholder when data is not available
  // }

  const {
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
    sys: { sunrise, sunset },
    visibility,
  } = data;

  const {
    list: [
      {
        main: { aqi },
        components: { co, no, no2, o3, so2, pm2_5, pm10, nh3 },
      },
    ],
  } = airQualityData;

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const feelsLikeTemp = kelvinToCelsius(feels_like);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const airContents = AirContentModel.map((type) => {
    if (type.content === "Humidity") {
      return { content: type.content, quantity: humidity, icon: type.icon };
    } else if (type.content === "Pressure") {
      return { content: type.content, quantity: pressure, icon: type.icon };
    } else if (type.content === "Visibility") {
      return { content: type.content, quantity: visibility, icon: type.icon };
    } else {
      return {
        content: type.content,
        quantity: feelsLikeTemp,
        icon: type.icon,
      };
    }
  });

  const airChemicalContents = AirQualityModel.map((airItem, index) => {
    if (airItem.chemicalType === "CO") {
      return { content: co.toFixed(2), chemicalType: airItem.chemicalType };
    } else if (airItem.chemicalType === "NO") {
      return { content: no.toFixed(2), chemicalType: airItem.chemicalType };
    } else if (airItem.chemicalType === "pm2_5") {
      return { content: pm2_5.toFixed(2), chemicalType: airItem.chemicalType };
    } else {
      return { content: pm10.toFixed(2), chemicalType: airItem.chemicalType };
    }
  });

  return (
    <Box
      sx={{
        marginLeft: "30px",
        background: "rgb(241, 241, 241)",
        marginTop: "20px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "10px grey",
        width: "60%",
        color: "black",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "10px",
          color: "black",
          fontWeight: "500",
        }}
      >
        Today's Highlight
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            // border: "1px solid rgb(37, 40",
            flex: 1,
            marginRight: "5px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "180px",
            borderRadius: "8px",
            background: "white",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography>Air quality</Typography>
              <Box
                sx={{
                  background:
                    aqi === 1
                      ? "Green"
                      : aqi === 2
                      ? "light green"
                      : aqi === 3
                      ? "yellow"
                      : aqi === 4
                      ? "orange"
                      : "red",
                  padding: "2px 6px 2px 6px",
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                {aqi === 1
                  ? "Good"
                  : aqi === 2
                  ? "Fair"
                  : aqi === 3
                  ? "Moderate"
                  : aqi === 4
                  ? "Poor"
                  : "Very Poor"}
              </Box>
            </Box>
            <Air sx={{ marginTop: "20px" }} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {airChemicalContents.map((item, index) => (
              <Box key={index}>
                {/* Add a key prop */}
                <Typography>{item.chemicalType}</Typography>
                <Typography>{item.content}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            // border: "1px solid black",
            borderRadius: "8px",
            marginLeft: "5px",
            padding: "20px",
            height: "180px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "white",
          }}
        >
          <Typography>Sunrise and Sunset</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              alignItems: "center",
              height: "50%",

              padding: "20px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <WbSunny />
              {formatTime(sunrise)}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Nightlight />
              {formatTime(sunset)}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "20px", width: "100%" }}>
        {airContents.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: "10px",
              marginRight: "6px",
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              height: "100px",
              flexDirection: "column",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <Typography>{item.content}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <item.icon />
              <Typography>{item.quantity}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MainSection;
