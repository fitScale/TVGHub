import style from "./page.module.css";
import { createClient } from "next-sanity";
import MuxVideo from "../../components/MuxVideo/MuxVideo.component";
import ImageContainer, {
  ImageContainerProps,
} from "../../components/ImageContainer/ImageContainer.component";
import { PortableText } from "@portabletext/react";
import Calendly from "@/app/components/Calendly/Calendly.component";
import Svg from "../../../../public/svgs/svgComponent/svg.component";
// export const dynamic = "force-dynamic";
// export const revalidate = 1;

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
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697340935/FitScaleLogo1_q74m0w.png",
    aspectRatio: "1080/219",
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
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697340828/DoodleArrow_wobmgs.png",
    aspectRatio: "1/1",
  };

  const config: ImageContainerProps = {
    src: pageData.container,
    aspectRatio: "1/1",
  };

  return (
    <>
      <main className={style.main}>
        <div className={style.floating}>
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
        </div>
        <div
          style={{
            padding: "12px 0px",
            width: "100%",
            backgroundColor: pageData.color,
            textAlign: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "13px",
            borderBottom: "2px solid white",
          }}
        >
          <p>
            Hey {pageData.name}, {"I've been expecting you 👋"}
          </p>{" "}
        </div>
        <header className={style.header}>
          <ImageContainer config={logoConfig} />
        </header>
        <div className={style.backgroundImage}>
          <div></div>
          <div
            style={{
              backgroundImage: `linear-gradient( black, ${pageData.color})`,
            }}
          ></div>
        </div>
        <div className={style.heading}>
          <h3>{pageData.subHeading}</h3>
          <p style={{ fontSize: "23px", fontWeight: "900" }}>
            BOOST YOUR CONVERSION <br />
            RATE BY 157%*
          </p>
          <div className={style.subHeading}>
            <h3
              style={{
                fontFamily: "var(--Inter)",
                fontSize: "14px",
                color: pageData.highlight,
              }}
            >
              When you participate in our market research study. ({" "}
              <span style={{ textDecoration: "underline" }}>
                Only takes 15-mins
              </span>
              {""} )
            </h3>
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
              color: pageData.highlight,
            }}
          />
        </div>
        <div className={style.book}>
          <p
            style={{
              color: "white",
              padding: " 0px 24px",
              fontSize: "10px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            ( <span style={{ fontWeight: "900" }}>*</span>The percentage
            increase is based on the average performance uplift seen by our
            clients compared to standard website traffic. )
          </p>
          <h3 style={{ fontWeight: "900" }}>{pageData.bookingText}</h3>
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
              color: pageData.highlight,
            }}
          />
        </div>

        <div className={style.book}>
          <h3>{pageData.bookingText}</h3>
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
