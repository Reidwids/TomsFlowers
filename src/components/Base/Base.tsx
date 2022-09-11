import React from "react";
import { useLocation, Route, Routes } from "react-router";
import Landing from "../Landing/Landing";
import { AnimatePresence } from "framer-motion";

export default function Base() {
	// Variables //
	const location = useLocation();

	// Render //
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/*" element={<Landing />} />
			</Routes>
		</AnimatePresence>
	);
}
