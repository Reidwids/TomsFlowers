import { useLocation, Route, Routes } from "react-router";
import Landing from "../Landing/Layout";
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
