"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import style from "./SubscriptionForm.module.css";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.component";

const SubscribeForm = ({
  setPopup,
  setWall,
}: {
  setPopup: Dispatch<SetStateAction<boolean>>;
  setWall: Dispatch<SetStateAction<boolean>>;
}) => {
  const mailchimpU = process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_U || "";
  const mailchimpID = process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_ID || "";

  // Construct the Mailchimp POST URL
  const postUrl = `https://thevisionarygrouptx.us18.list-manage.com/subscribe/post?u=${mailchimpU}&id=${mailchimpID}`;

  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692828122/TVG/Logos/TVG-full-white-small_s89rkz.png",
    aspectRatio: "391/106",
  };

  useEffect(() => {
    console.log("useEffect is running"); // Step 1

    const button = document.querySelector(
      ".formContainer > div:nth-last-child(2) > button"
    );

    if (button) {
      button.textContent = "UNLOCK MY FREE TRAINING NOW!";
      button.addEventListener("click", async () => {
        setTimeout(() => {
          const div = document.querySelector(
            ".formContainer > div:nth-child(3) > div"
          );
          if (div) {
            (div as HTMLElement).textContent = "SUCCESS!";
            (div as HTMLElement).style.color = "var(--highlightColor)";
          } else {
            console.log("Div not found");
          }
        }, 1);

        setTimeout(() => {
          setPopup(false);
          setWall(false);
        }, 100);
      });
    } else {
      console.log("Button not found");
    }
  }, []);
  const SimpleForm = ({ onSubmitted }: { onSubmitted: any }) => (
    <div className={`${style.formContainer} formContainer`}>
      <ImageContainer config={logoConfig} />
      <div className={style.copy}>
        <p>
          UNLOCK THIS TRAINING
          <span
            style={{
              color: "var(--highlightColor)",
              textDecoration: "underline",
            }}
          >
            {" "}
            FOR FREE
          </span>
        </p>
        <p>
          Alongside this training, we also want to send you a whole bunch of
          other free goodies to help you crush it... but we need your email for
          that!
        </p>
      </div>
      <MailchimpSubscribe url={postUrl} />
      <p>
        By providing us with your information you are consenting to the
        collection and use of your information in accordance with our Terms of
        Service and Privacy Policy.
      </p>
    </div>
  );

  return (
    <div className={style.formOuterContainer}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <div>
            <SimpleForm onSubmitted={(formData: any) => subscribe(formData)} />
          </div>
        )}
      />
    </div>
  );
};

export default SubscribeForm;
