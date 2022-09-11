import React from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Landing from "../Landing/Landing";
import { useTheme } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const blackBox = {
	initial: {
		height: "100vh",
		bottom: 0,
	},
	animate: {
		height: 0,
	},
};

export default function Base() {
	// Variables //
	const location = useLocation();

	// Functions //

	// Use Effects //

	// Render //
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Landing />} />
			</Routes>
		</AnimatePresence>
	);
}