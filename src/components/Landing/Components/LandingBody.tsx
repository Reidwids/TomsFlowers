import { Box, Typography } from "@mui/material";
import React from "react";
type PropTypes = {
  isDesktop: boolean;
};

export default function LandingBody({ isDesktop }: PropTypes) {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "lightblue",
        width: "100%",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            height: isDesktop ? "100px" : "60px",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          <Typography color="primary" sx={{ fontSize: "18px" }}>
            Location & Hours
          </Typography>
          <Typography sx={{ fontSize: "18px" }} color="primary">
            About
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
