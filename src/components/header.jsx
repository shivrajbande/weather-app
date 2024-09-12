import React from "react";
import { useState,useReducer } from "react";
import {
  Typography,
  Icon,
  Box,
  TextField,
  Container,
  InputAdornment,
  Button,
} from "@mui/material";
import { Cloud, ThreeDRotation, Search, MyLocation } from "@mui/icons-material";
import {currentWeatherReducer} from '../reducers/fetchweather/reducer';
import {Fetchweather} from '../services/fetchweather'

function Header() {

  const [credentails,setCredentials] = useState({email:'',password : ''});
  const[state,dispatch] = useReducer(currentWeatherReducer,{user:null,loading:false,error:null});//usereducer needs reducer and state varibles
  const fetchCurrentLocation =(e)=>{
    e.preventDefault();
    Fetchweather(dispatch)(credentails);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4%",
        // background: "rgb(241, 241, 241)",
        padding: "4px 10px 4px 10px",
        borderRadius : "8px"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center" ,color: "rgb(37, 40, 42)"}}>
        <Cloud sx={{  fontSize : "30px" }} />
        <Typography variant="h6" marginLeft={"10px"}>Weather-India</Typography>
      </Box>
      <Box>
        <TextField
        size="small"
        placeholder="Search..."
        variant="outlined" 
        color="red"
        sx={{
            width : "450px",
            borderColor: 'green', // Set the border color
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'grey', // Set the focused border color
            },
            '& .MuiInputBase-input': {
              color: 'black', // Set the text color
            },
            borderRadius: '20px'
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        ></TextField>
      </Box>
      <Box>
        <Button variant="outlined" sx={{ border:"1px solid black",boxShadow : "", background : "rgb(37, 40, 42)", borderRadius : "6px" }} onClick={fetchCurrentLocation}>
          <Box sx={{ display: "flex", flexDirection: "row" ,color : "white"}}>
            <MyLocation sx ={{marginRight : "6px",fontSize : "18px"}} />
            <Typography fontSize={"13px"}>Current Location</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
