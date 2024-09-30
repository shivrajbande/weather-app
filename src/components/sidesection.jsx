import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Cloud, WbSunny, CalendarMonth, LocationOn } from "@mui/icons-material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { useSelector } from "react-redux";
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

const modelClass = [
  {
    temperature: 19,
    date: "12 sep",
    weatherType: "Broken clouds",
  },
  {
    temperature: 20,
    date: "12 sep",
    weatherType: "Broken clouds",
  },
  {
    temperature: 35,
    date: "12 sep",
    weatherType: "Broken clouds",
  },
  {
    temperature: 35,
    date: "12 sep",
    weatherType: "Broken clouds",
  },
  {
    temperature: 35,
    date: "12 sep",
    weatherType: "Broken clouds",
  },
];

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long", // Full name of the day (e.g., "Sunday")
    month: "short", // Short form of the month (e.g., "Sep")
    day: "numeric", // Numeric day (e.g., "11")
  }).format(date);
};
export default function SideSection() {
  const { data, error, loading } = useSelector((state) => state.currentWeather);
  const { forcastDataList } = useSelector((state) => state.weatherForcast);
  const {
    name,
    weather: [{ main }],
    main: { temp, feels_like, humidity, pressure },
  } = data;
  const currentDate = formatDate(new Date());

  const { list } = forcastDataList;
  const forCastModel = list.map((dayForcast) => {
    const {
      dt,
      temp: { day },
      weather: [{ description }],
    } = dayForcast;



    const date = new Date(dt * 1000);

    const dayString = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    const formattedDate = `${dayString} ${month}`;

    return {
      temperature: day,
      date: formattedDate,
      weatherType: description,
    };
  });

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
  const currentTemp = kelvinToCelsius(temp);

  return (
    <Box
      sx={{
        width: "25vw",
        background: "white",
        marginBottom: "20px",
        padding: "20px",
        // display : "flex",
      }}
    >
      <Box
        sx={{
          background: "rgb(241, 241, 241)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "10px grey",
          color: "black",
        }}
      >
        <Typography>Now</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "14%",
            margin: "2px 0px 2px 0px",
          }}
        >
          <Typography variant="h4">{currentTemp}oC</Typography>
          {
            // raining ? (
            //   <ThunderstormIcon sx={{ color: "black" }} />
            // ) : (
            //   <>
            //     {currentState < 25 && (
            //       <Cloud
            //         sx={{
            //           color: "black",
            //         }}
            //       />
            //     )}
            //     {currentState > 25 && (
            //       <WbSunny
            //         sx={{
            //           color: "black",
            //         }}
            //       />
            //     )}
            //   </>
            // )
            main === "Clouds" ? (
              <Cloud
                sx={{
                  color: "black",
                }}
              />
            ) : "Rain" ? (
              <WbSunny
                sx={{
                  color: "black",
                }}
              />
            ) : (
              <></>
            )
          }
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            margin: "8px 0px 8px 0px",
          }}
        >
          <CalendarMonth />
          <Typography>{currentDate}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
          }}
        >
          <LocationOn /> <Typography>{name}</Typography>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "10px", height: "40", background: "white" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "500",
            marginTop: "30px",
          }}
        >
          Next 5 days forcast
        </Typography>

        <Box
          sx={{
            background: "grey",
            marginTop: "10px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "10px grey",
            background: "rgb(241, 241, 241)",
          }}
        >
          {forCastModel.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "black",
              }}
            >
              <Typography>{item.temperature}</Typography>
              <Typography>{item.date}</Typography>
              <Typography>{item.weatherType}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
