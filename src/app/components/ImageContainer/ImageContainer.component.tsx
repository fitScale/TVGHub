import style from "./ImageContainer.module.css";
import Image from "next/image";

export interface ImageContainerProps {
  src: string;
  aspectRatio: string;
}

const ImageContainer = ({ config }: { config: ImageContainerProps }) => {
  return (
    <div
      className={style.container}
      style={{ aspectRatio: config.aspectRatio }}
    >
      <Image src={config.src} alt="" fill />
    </div>
  );
};

export default ImageContainer;
