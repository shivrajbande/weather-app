import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Cloud, WbSunny, CalendarMonth, LocationOn } from "@mui/icons-material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
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
export default function SideSection() {
  const [currentState, setCurrentState] = useState(21.4);
  const [raining, setRaining] = useState(false);
  const [weatherType, setweatherType] = useState("rainy");
  const [currentDate, setCurrentDate] = useState("Sunday, sep 11");
  const [location, setLocation] = useState("Hyderabad");
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
            margin : "2px 0px 2px 0px"
          }}
        >
          <Typography variant="h4">{currentState}oC</Typography>
          {raining ? (
            <ThunderstormIcon sx ={{color  : "black"}} />
          ) : (
            <>
              {currentState < 25 && (
                <Cloud
                  sx={{
                    color: "black",
                  }}
                />
              )}
              {currentState > 25 && (
                <WbSunny
                  sx={{
                    color: "black",
                  }}
                />
              )}
            </>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            margin : "8px 0px 8px 0px"
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
          {" "}
          <LocationOn /> <Typography>{location}</Typography>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "10px", height: "40", background: "white" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "500",
            marginTop : "30px"
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
          {modelClass.map((item, index) => (
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
