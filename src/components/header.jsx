import React, { useEffect, useState } from "react";
import {
  Typography,
  Icon,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Cloud, Search, MyLocation } from "@mui/icons-material";
import { currentWeatherReducer } from "../reducers/fetchweather/reducer";
import { FetchCurrerntWeather } from "../services/fetchweather";
import { FetchAirQuality } from "../services/fetchAirQuality";
import { FetchWeatherForcast } from "../services/fetchWeatherForcast";

function Header() {
  const [location, setLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [permissionStatus, setPermissionStatus] = useState("");
  const dispatch = useDispatch();
  const { data, laoding, error } = useSelector((state) => state.currentWeather);
  const fetchCurrentLocation = async (e) => {
    e.preventDefault();
    await checkPermission(); // Ensure permission is checked before fetching weather
    if (location) {
      // Fetch weather only if location is available
      await Promise.all([
        FetchCurrerntWeather(dispatch)(location.latitude, location.longitude),
        FetchAirQuality(dispatch)(location.latitude, location.longitude),
        FetchWeatherForcast(dispatch)(location.latitude, location.longitude),
      ]);
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
    console.log(position.coords.latitude, position.coords.longitude);

    // Automatically fetch weather after getting location
    FetchCurrerntWeather(dispatch)(
      position.coords.latitude,
      position.coords.longitude
    );
  };

  const errorFun = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleLocationChange = async () => {
    // event.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=2&appid=${process.env.REACT_APP_API_KEY}`,
        {
          method: "GET",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        const { lat, lon, state, name } = data[0];
        setLocation({
          latitude: lat,
          longitude: lon,
        });

        await Promise.all([
          FetchCurrerntWeather(dispatch)(lat, lon),
          FetchAirQuality(dispatch)(lat, lon),
          FetchWeatherForcast(dispatch)(lat, lon),
        ]);
      } else {
        const error = await response.text();
      }
    } catch (error) {
      console.log("error is ", error);
    }
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "rgb(37, 40, 42)",
        }}
      >
        <Cloud sx={{ fontSize: "30px" }} />
        <Typography variant="h6" marginLeft={"10px"}>
          Weather-Info
        </Typography>
      </Box>
      <Box>
        <TextField
          size="small"
          placeholder="Location..."
          variant="outlined"
          onChange={(event) => setSearchLocation(event.target.value)}
          sx={{
            width: "450px",
            borderRadius: "20px",
          }}
          slotProps={{
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button onClick={handleLocationChange}>Search</Button>
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
