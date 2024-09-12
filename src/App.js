import "./App.css";
import { Box, Button } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import SideSection from "./components/sidesection";
import MainSection from "./components/mainsection";

function App() {
  return (
    <Box sx={{display :"flex",flexDirection : "column",background:"white",height : '100vh',marginTop : "10px", justifyContent : "space-between"}}>
      <Header />
      <Box sx={{display :"flex",flexDirection : "row", marginBottom : "40px", marginTop : "20px", justifyContent : "center"}}>
        <SideSection />
        <MainSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
