"use client";

import MuxPlayer from "@mux/mux-player-react";
import style from "./MuxVideo.module.css";

export interface MuxVideoProps {
  videoId: string;
  videoCaption: string;
}

const MuxVideo = ({ config }: { config: MuxVideoProps }) => {
  return (
    <div className={style.videoBox}>
      <div className={style.banner}>
        <p>{config.videoCaption}</p>
      </div>
      <div className={style.videoContainer}>
        <MuxPlayer
          streamType="on-demand"
          playbackId={config.videoId}
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
        />
      </div>
    </div>
  );
};

export default MuxVideo;
