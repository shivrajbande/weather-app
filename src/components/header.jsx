import React, { useEffect, useState, } from "react";
import {
  Typography,
  Icon,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { Cloud, Search, MyLocation } from "@mui/icons-material";
import { currentWeatherReducer } from "../reducers/fetchweather/reducer";
import { FetchCurrerntWeather } from "../services/fetchweather";
import { FetchAirQuality } from "../services/fetchAirQuality";
import { FetchWeatherForcast } from "../services/fetchWeatherForcast";

function Header() {
  const [location, setLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState("");
  const dispatch = useDispatch();
  const {data, laoding, error} = useSelector((state)=>state.currentWeather);
  const fetchCurrentLocation = async (e) => {
    e.preventDefault();
    await checkPermission(); // Ensure permission is checked before fetching weather
    if (location) {
      // Fetch weather only if location is available
      FetchCurrerntWeather(dispatch)(location.latitude, location.longitude);
      FetchAirQuality(dispatch)(location.latitude, location.longitude);
      FetchWeatherForcast(dispatch)(location.latitude, location.longitude);
    } else {
      console.log("Location not available.");
    }
  };

  // useEffect(() => {
  //   checkPermission();
  // }, []);

  const checkPermission = async () => {
    if (navigator.permissions) {
      const result = await navigator.permissions.query({
        name: "geolocation",
      });
      setPermissionStatus(result.state);
      if (result.state === "prompt") {
        requestLocation();
      } else if (result.state === "denied") {
        console.log("Geolocation permission denied.");
      } else if (result.state === "granted") {
        // If already granted, get the current position
        requestLocation();
      }
    }
  };

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(success, errorFun);
  };

  const success = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    console.log(position.coords.latitude,position.coords.longitude);
    
    // Automatically fetch weather after getting location
    FetchCurrerntWeather(dispatch)(position.coords.latitude, position.coords.longitude);
  };

  const errorFun = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4%",
        padding: "4px 10px",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", color: "rgb(37, 40, 42)" }}>
        <Cloud sx={{ fontSize: "30px" }} />
        <Typography variant="h6" marginLeft={"10px"}>
          Weather-India
        </Typography>
      </Box>
      <Box>
        <TextField
          size="small"
          placeholder="Location..."
          variant="outlined"
          sx={{
            width: "450px",
            borderRadius: "20px",
          }}
          slotProps={{
            InputProps:{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }

          }}
        />
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid black",
            background: "rgb(37, 40, 42)",
            borderRadius: "6px",
          }}
          onClick={fetchCurrentLocation}
        >
          <Box sx={{ display: "flex", flexDirection: "row", color: "white" }}>
            <MyLocation sx={{ marginRight: "6px", fontSize: "18px" }} />
            <Typography fontSize={"13px"}>Current Location</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default Header;