"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const desktop = window.innerWidth > 943;

  return (
    <InlineWidget
      styles={{
        height: "800px",
        transform: desktop ? "translateY(-21px)" : "translateY(5px)",
      }}
      url="https://calendly.com/fitscale/30min"
    />
  );
};

export default Calendly;
