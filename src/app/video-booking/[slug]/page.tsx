import style from "./page.module.css";
import { createClient } from "next-sanity";
import MuxVideo from "../../components/MuxVideo/MuxVideo.component";
import ImageContainer, {
  ImageContainerProps,
} from "../../components/ImageContainer/ImageContainer.component";
import { PortableText } from "@portabletext/react";
import Calendly from "@/app/components/Calendly/Calendly.component";
import Svg from "../../../../public/svgs/svgComponent/svg.component";

export const dynamic = "force-dynamic";

const client = createClient({
  projectId: "xo86se8r",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

async function findDocumentBySlug(urlSlug: string) {
  // Fetch all documents of type 'videoBooking'
  const query = '*[_type == "videoBooking"]';
  const allDocuments = await client.fetch(query);

  // Find the document where the slug matches
  const matchedDocument = allDocuments.find(
    (doc: any) => doc.slug?.current === urlSlug
  );

  return matchedDocument;
}

const VideoBookingPage = async ({ params }: { params: { slug: string } }) => {
  const pageData = await findDocumentBySlug(params.slug);

  const videoData = await client.fetch(
    `*[_id == "${pageData.video.asset["_ref"]}"]`
  );

  const thumbnail = await client.fetch(
    `*[_id == "${pageData.thumbnail.asset["_ref"]}"]`
  );

  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692828122/TVG/Logos/TVG-full-white-small_s89rkz.png",
    aspectRatio: "391/106",
  };

  const mobileBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692829885/TVG/Banners/TVG-mobilebanner1_dbyst8.jpg",
    aspectRatio: "1080/1920",
  };

  const desktopBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692845973/Final_qflgxr.jpg",
    aspectRatio: "1920/1437",
  };

  const doodleConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692834696/Misc%20Assets/Doodles/Untitled-1fasdf_bjxbpl.png",
    aspectRatio: "1/1",
  };

  return (
    <>
      <main className={style.main}>
        <header className={style.header}>
          <ImageContainer config={logoConfig} />
        </header>
        <div className={style.backgroundImage}>
          <div></div>
          <ImageContainer config={mobileBanner} />
        </div>
        <div className={style.heading}>
          <h3>{pageData.subHeading}</h3>
          <PortableText value={pageData.heading} />
          <div className={style.subHeading}>
            <h3>{pageData.headingCopy}</h3>
            <ImageContainer config={doodleConfig} />
          </div>
        </div>
        <div className={style.videoPadding}>
          <MuxVideo
            config={{
              videoId: videoData[0].playbackId,
              videoCaption: pageData.videoBannerCopy,
              wall: pageData.walled,
              thumbnail: thumbnail[0].url,
            }}
          />
        </div>
        <div className={style.book}>
          <h3>
            BOOK YOU <span style={{ textDecoration: "underline" }}>FREE</span>{" "}
            GROWTH CALL TODAY{" "}
          </h3>
          <div>
            <Svg icon="ArrowSkinnyIcon" color="white" />
            <Svg icon="ArrowSkinnyIcon" color="white" />
            <Svg icon="ArrowSkinnyIcon" color="white" />
          </div>
        </div>
        <div className={style.calendly}>
          <Calendly />
        </div>
        <footer className={style.footer}>
          <div className={style.footerAbout}>
            <p>ABOUT TVG:</p>
            <p>
              We are a digital marketing and consulting group 100% focused on
              the fitness industry.
            </p>
          </div>
          <p>© 2023, THE VISONARY GROUP</p>
        </footer>
      </main>
      <main className={style.mainDesktop}>
        <header className={style.header}>
          <ImageContainer config={logoConfig} />
        </header>
        <div className={style.backgroundImage}>
          <div></div>
          <ImageContainer config={desktopBanner} />
        </div>
        <div className={style.heading}>
          <h3>{pageData.subHeading}</h3>
          <PortableText value={pageData.heading} />
          <div className={style.subHeading}>
            <h3>{pageData.headingCopy}</h3>
            <ImageContainer config={doodleConfig} />
          </div>
        </div>
        <div className={style.videoPadding}>
          <MuxVideo
            config={{
              videoId: videoData[0].playbackId,
              videoCaption: pageData.videoBannerCopy,
              wall: pageData.walled,
              thumbnail: thumbnail[0].url,
            }}
          />
        </div>

        <div className={style.book}>
          <h3>
            BOOK YOU <span style={{ textDecoration: "underline" }}>FREE</span>{" "}
            GROWTH CALL TODAY{" "}
          </h3>
          <div>
            <Svg icon="ArrowSkinnyIcon" color="white" />
            <Svg icon="ArrowSkinnyIcon" color="white" />
            <Svg icon="ArrowSkinnyIcon" color="white" />
          </div>
        </div>
        <Calendly />
        <footer className={style.footer}>
          <div className={style.footerAbout}>
            <p>ABOUT TVG:</p>
            <p>
              We are a digital marketing and consulting group 100% focused on
              the fitness industry.
            </p>
          </div>
          <p>© 2023, THE VISONARY GROUP</p>
        </footer>
      </main>
    </>
  );
};

export default VideoBookingPage;
