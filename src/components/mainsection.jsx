import React from "react";
import { Box, Typography } from "@mui/material";
import {
  AirQualityModel,
  SunriseSetModel,
  AirContentModel,
} from "../models/mainsection";
import { Air} from "@mui/icons-material";

function MainSection() {
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
          color : "black"
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
            borderRadius : "8px",
            background : "white"
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
                  background: "green",
                  padding: "2px 6px 2px 6px",
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                Free
              </Box>
            </Box>
            <Air sx={{ marginTop: "20px" }} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {AirQualityModel.map((item, index) => (
              <Box key={index} >
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
            borderRadius : "8px",
            marginLeft: "5px",
            padding: "20px",
            height: "180px",
        
            display : "flex",
            flexDirection: "column",
            justifyContent : "space-between",
            background : "white",

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
              
             
              padding : "20px",
            }}
          >
            {SunriseSetModel.map((item, index) => (
              <Box sx={{ display: "flex",
                flexDirection: "column",}}>
                <item.icon />
                {item.timings}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "20px", width: "100%" }}>
        {AirContentModel.map((item, index) => (
          <Box
            sx={{
              padding: "10px",
              // border: "1px solid black",
              marginRight: "6px",
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              height: "100px",
              flexDirection: "column",
              borderRadius : "8px",
              background : "white",
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
