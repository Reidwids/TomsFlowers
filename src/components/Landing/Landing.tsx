import React from "react";
import Rose from "../../assets/icons/Rose.svg";
import TomsFlowersNoRose from "../../assets/images/TomsFlowersNoRose.svg";
import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import LandingAnimation from "./Components/LandingAnimation";
import LandingBody from "./Components/LandingBody";

export default function Landing() {
	// Variables //
	const isDesktop = useMediaQuery("(min-width:600px)");
	const whiteBox = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 0,
			transition: {
				delay: 3.5,
				duration: 3,
				ease: [0.87, 0, 0.13, 1],
			},
		},
	};
	console.log(isDesktop);
	const logoTransition = {
		initial: {
			height: "100vh",
		},
		animate: {
			height: isDesktop ? "100px" : "60px",
			transition: {
				delay: 3,
				duration: 2,
				ease: "easeInOut",
			},
		},
	};
	// Functions //

	// Use Effects //

	// Render //
	return (
		<>
			{/* Page Container */}
			<LandingBody isDesktop={isDesktop} />
			<LandingAnimation isDesktop={isDesktop} />
		</>
	);
}
