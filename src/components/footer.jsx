import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import {LinkedIn,Google,GitHub,Instagram} from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          background: "black",
          color: "rgb(241, 241, 241)",
          borderRadius: "6px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, marginRight: "10px" }}>
          <Typography variant="h5" sx={{marginBottom : "15px"}}>Weather-Info</Typography>
          <Typography variant="body2">
            Receive personalized weather reports based on your current location
            or any other city you choose.
          </Typography>
        </Box>
        <Box flex={1}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 3,
            marginRight: "10px",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{marginBottom : "15px"}}>About</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" underline="none" color="white" target="_blank">
                About Me
              </Link>
              <Link href="#" underline="none" color="white" target="_blank">
                Solutions
              </Link>
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{marginBottom : "15px"}}>Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="#" underline="none" color="white" target="_blank">
                FAQ's
              </Link>
              <Typography>Shivabande09@gmail.com</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginRight: "10px" }}>
            <Typography variant="h5" sx={{marginBottom : "15px"}}>Social</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{display : "flex",alignItems:"center",marginBottom:"6px"}}>
                <LinkedIn sx={{marginRight : "4px"}}/>
                <Link href="https://linkedin.com/in/shivraj-bande" underline="none" color="white" target="_blank">
                LinkedIn
              </Link>
              </Box>
              <Box sx={{display : "flex",alignItems:"center",marginBottom:"6px"}}>
                <GitHub sx={{marginRight : "4px"}}/>
                <Link href="https://github.com/shivrajbande" underline="none" color="white" target="_blank">
                Github
              </Link>
              </Box>
              <Box sx={{display : "flex",alignItems:"center",marginBottom:"6px"}}>
                <Instagram sx={{marginRight : "4px"}}/>
                <Link href="#" underline="none" color="white" target="_blank">
                Instagram
              </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
