import "./App.css";
import { Box, Button } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import SideSection from "./components/sidesection";
import MainSection from "./components/mainsection";
import { Provider } from "react-redux";
import store from "./reducers/commonReducer";

function App() {
  return (
    <Provider store={store}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          height: "100vh",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "40px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <SideSection />
          <MainSection />
        </Box>
        <Footer />
      </Box>
    </Provider>
  );
}

export default App;
