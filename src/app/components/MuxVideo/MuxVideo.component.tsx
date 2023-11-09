"use client";

import MuxPlayer from "@mux/mux-player-react";
import style from "./MuxVideo.module.css";
import { useState, useEffect } from "react";
import ImageContainer from "../ImageContainer/ImageContainer.component";
import Svg from "../../../../public/svgs/svgComponent/svg.component";
import SubscribeForm from "../SubscriptionForm/SubsrcriptionForm.component";
import { WASI } from "wasi";

export interface MuxVideoProps {
  videoId: string;
  videoCaption: string;
  wall: boolean;
  thumbnail: string;
  color: string;
}

const MuxVideo = ({ config }: { config: MuxVideoProps }) => {
  const [wall, setWall] = useState(config.wall);
  const [form, setForm] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Run effect on mount to set the client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing if it's not client-side
  if (!isClient) {
    return null;
  }

  return (
    <div
      className={style.videoBox}
      style={{
        backgroundColor: config.wall ? "transparent" : "black",
        aspectRatio: wall ? "16/9" : "",
      }}
    >
      {wall ? (
        <>
          {form && (
            <div className={style.popup}>
              <SubscribeForm setPopup={setForm} setWall={setWall} />
            </div>
          )}
          <div
            className={style.thumbnail}
            onClick={() => {
              setForm(true);
            }}
          >
            <ImageContainer
              config={{ src: config.thumbnail, aspectRatio: "16/9" }}
            />
            <div
              onClick={() => {
                setForm(true);
              }}
            >
              <Svg icon="PlayIcon" color="white" size="75px" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={style.banner}
            style={{ backgroundColor: config.color }}
          >
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
              playbackId={config.videoId}
              metadata={{
                video_id: "video-id-54321",
                video_title: "Test video title",
                viewer_user_id: "user-id-007",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MuxVideo;
