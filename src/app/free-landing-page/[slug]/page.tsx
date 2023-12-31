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

export async function generateStaticParams() {
  return [
    { slug: "milan-dave" },
    { slug: "brandon-kelly" },
    { slug: "christian-ricks" },
    { slug: "javier-figueroa" },
    { slug: "chandler-burner" },
    { slug: "alex-pineda" },
    { slug: "zach-zimmerly" },
    { slug: "sharif-sayed" },
    { slug: "tyrone-faverey" },
    { slug: "josh-conyers" },
    { slug: "burst-creatine" },
    { slug: "munch-better" },
    { slug: "lakota-tow" },
    { slug: "inherit-energy" },
    { slug: "john-wilson" },
    { slug: "miller-maines" },
  ];
}

const test = 2;

const client = createClient({
  projectId: "xo86se8r",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

async function findDocumentBySlug(urlSlug: string) {
  // Fetch all documents of type 'videoBooking'
  const query = '*[_type == "videoBooking"]';
  const allDocuments = await client.fetch(query, { cache: "no-store" });

  // Find the document where the slug matches
  const matchedDocument = allDocuments.find(
    (doc: any) => doc.slug?.current === urlSlug
  );

  return matchedDocument;
}

const test2 = 1;

const VideoBookingPage = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  const pageData = await findDocumentBySlug(params.slug);

  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1699559484/Purus%20Labs/Fit-Solutions_Logo-min_vlwmdh.png",
    aspectRatio: "1499/152",
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
          <ImageContainer config={config} />
        </div>
        <div
          style={{
            padding: "12px 0px",
            width: "100%",
            backgroundColor: pageData.highlight,
            textAlign: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "13px",
            borderBottom: "2px solid white",
          }}
        >
          <p>
            <span style={{ fontWeight: "900" }}>Hey {pageData.name}</span>,{" "}
            {"hope your having an awesome day! 💪"}
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
              When you participate in our market research <br />
              study. ({" "}
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
              color: pageData.color,
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
          <div style={{ width: "100%", padding: "0px 24px" }}>
            <div className={style.trust}>
              <p>
                We have made landing pages for{" "}
                <span
                  style={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  top brands:
                </span>
              </p>
              <div>
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/prosupps-logo_uwitld.png",
                    aspectRatio: "1200/156",
                  }}
                />
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/White_Klout_prfjkb.png",
                    aspectRatio: "300/108",
                  }}
                />
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/Purus_axgqyz.png",
                    aspectRatio: "1355/183",
                  }}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "5px",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            The only question is...{" "}
            <span style={{ fontWeight: "800", textDecoration: "underline" }}>
              Are you next
            </span>{" "}
            ?
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
            <p>About Fit-Solutions:</p>
            <p>
              Fit-Solutions offers strategic partnership and guidance to sports
              nutrition brands, helping them to achieve market leadership and
              sustainable growth in todays competitive market.
            </p>
          </div>
          <p>© 2023, Fit-Solutions</p>
        </footer>
      </main>
      <main className={style.mainDesktop}>
        <div className={style.floating}>
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
          <ImageContainer config={config} />
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
            backgroundColor: pageData.highlight,
            textAlign: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "13px",
            borderBottom: "2px solid white",
          }}
        >
          <p>
            <span style={{ fontWeight: "900" }}>Hey {pageData.name}</span>,{" "}
            {"hope your having an awesome day! 💪"}
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
          <p style={{ fontWeight: "900" }}>
            {" "}
            BOOST YOUR CONVERSION <br />
            RATE BY 157%*
          </p>
          <div className={style.subHeading}>
            <h3
              style={{
                fontFamily: "var(--Inter)",
                fontSize: "22px",
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
              color: pageData.color,
            }}
          />
        </div>

        <div className={style.book}>
          <p
            style={{
              color: "white",
              padding: " 0px 24px",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "25px",
            }}
          >
            ( <span style={{ fontWeight: "900" }}>*</span>The percentage
            increase is based on the average performance uplift seen by our
            clients compared to standard website traffic. )
          </p>
          <div style={{ width: "30%", padding: "0px 24px" }}>
            <div className={style.trust}>
              <p>
                We have made landing pages for{" "}
                <span
                  style={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  top brands:
                </span>
              </p>
              <div>
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/prosupps-logo_uwitld.png",
                    aspectRatio: "1200/156",
                  }}
                />
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/White_Klout_prfjkb.png",
                    aspectRatio: "300/108",
                  }}
                />
                <ImageContainer
                  config={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1697346345/Purus_axgqyz.png",
                    aspectRatio: "1355/183",
                  }}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "5px",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            The only question is...{" "}
            <span style={{ fontWeight: "800", textDecoration: "underline" }}>
              Are you next
            </span>{" "}
            ?
          </p>
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
            <p>About Fit-Solutions:</p>
            <p>
              Fit-Solutions offers strategic partnership and guidance to sports
              nutrition brands, helping them to achieve market leadership and
              sustainable growth in todays competitive market.
            </p>
          </div>
          <p>© 2023, Fit-Solutions</p>
        </footer>
      </main>
    </>
  );
};

export default VideoBookingPage;
