import LandingAnimation from "./Components/LayoutAnimation";
import LandingBody from "./Components/LayoutBody";
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
