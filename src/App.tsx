import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "./components/Base/Base";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#8d5a64",
		},
		secondary: {
			main: "#387668",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path="/*" element={<Base />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
