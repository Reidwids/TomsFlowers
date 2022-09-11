import React from "react";
import LandingAnimation from "./Components/LandingAnimation";
import LandingBody from "./Components/LandingBody";
import { useMediaQuery } from "@chakra-ui/react";

export default function Landing() {
  // Variables //
  const [isDesktop] = useMediaQuery("(min-width:720px)");

  // Render //
  return (
    <>
      {/* Page Container */}
      <LandingBody isDesktop={isDesktop} />
      <LandingAnimation isDesktop={isDesktop} />
    </>
  );
}
