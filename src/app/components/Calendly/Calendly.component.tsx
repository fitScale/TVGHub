"use client";

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendly: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // This code runs when the component mounts, and window is available
    const handleResize = () => setIsDesktop(window.innerWidth > 943);
    // Set the initial value
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <InlineWidget
      styles={{
        height: "800px",
        transform: isDesktop ? "translateY(-21px)" : "translateY(5px)",
      }}
      url="https://calendly.com/fitscale/15-min"
    />
  );
};

export default Calendly;
