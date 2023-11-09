"use client";

import MuxPlayer from "@mux/mux-player-react";
import style from "./MuxVideo.module.css";
import { useState, useEffect } from "react";
import ImageContainer from "../ImageContainer/ImageContainer.component";
import Svg from "../../../../public/svgs/svgComponent/svg.component";
import SubscribeForm from "../SubscriptionForm/SubsrcriptionForm.component";

export interface MuxVideoProps {
  color: string;
}

const MuxVideo = ({ config }: { config: MuxVideoProps }) => {
  const [form, setForm] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Run effect on mount to set the client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing if it's not client-side

  return (
    <div
      className={style.videoBox}
      style={{
        backgroundColor: "black",
        aspectRatio: "",
      }}
    >
      <>
        <div className={style.banner} style={{ backgroundColor: config.color }}>
          <p style={{ fontWeight: "600" }}>
            Watch to see how to claim your{" "}
            <span style={{ fontWeight: "800", textDecoration: "underline" }}>
              FREE landing page!
            </span>
          </p>
        </div>
        <div className={style.videoContainer}>
          <MuxPlayer
            poster="https://image.mux.com/hxn02MLOAICEZZAiJNOw5MXGFUao9Dm3B4GcqfntA01fY/animated.gif?width=630&start=0&end=10&fps=30"
            streamType="on-demand"
            playbackId="PSppvZQOxX02JkLIpGrV67x01BYt1tFX9UHCCUptwoPYM"
            primaryColor="white"
            secondaryColor="black"
          />
        </div>
      </>
    </div>
  );
};

export default MuxVideo;
