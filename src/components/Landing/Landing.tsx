import React from "react";
import Rose from "../../assets/icons/Rose.svg";
import TomsFlowersNoRose from "../../assets/images/TomsFlowersNoRose.svg";
import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

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
			<Box
				sx={{
					height: "100vh",
					backgroundColor: "lightblue",
					width: "100%",
					zIndex: "0",
				}}
			></Box>

			{/* The Logo div - separate from white bg*/}

			{/* Transition the div height from 100vh to navHeight */}
			<motion.div
				style={{
					position: "absolute",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					inset: "0",
					zIndex: "2",
					backgroundColor: "red",
				}}
				initial="initial"
				animate="animate"
				variants={logoTransition}
			>
				{/* Shrink full logo width to fit navheight */}
				<motion.div
					style={{ position: "relative" }}
					initial={{ width: "60%" }}
					animate={{
						width: isDesktop ? "350px" : "150px",
						transition: {
							delay: 3,
							duration: 2,
							ease: "easeInOut",
						},
					}}
				>
					{/* Fade in flowerless logo on page load */}
					<motion.img
						src={TomsFlowersNoRose}
						style={{ width: "100%" }}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 1.5,
								ease: [0.87, 0, 0.13, 1],
							},
						}}
					/>
					{/* Fade in the flower after logo fadein */}
					<motion.img
						src={Rose}
						style={{ position: "absolute", right: "20%", width: "10%" }}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: 1,
								duration: 3,
								ease: [0.87, 0, 0.13, 1],
							},
						}}
					/>
				</motion.div>
			</motion.div>

			{/* The white background on pageload */}
			<Box
				sx={{
					position: "absolute",
					display: "flex",
					justifyContent: "center",
					inset: "0",
				}}
			>
				<motion.div
					style={{
						position: "relative",
						display: "flex",
						zIndex: "1",
						width: "100%",
						backgroundColor: "white",
						height: "100vh",
						justifyContent: "center",
						alignItems: "center",
					}}
					initial="initial"
					animate="animate"
					variants={whiteBox}
				></motion.div>
			</Box>
		</>
	);
}
