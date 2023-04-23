import React from "react";
import "./App.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Base from "./components/Base/Base";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Nunito Sans, sans-serif",
  },
  colors: {
    flowerPink: "#8d5a64",
    flowerGreen: "#387668",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/*" element={<Base />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
