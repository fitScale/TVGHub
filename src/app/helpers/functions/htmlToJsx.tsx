import React from "react";

type HtmlToJSXProps = {
  html: string;
};

const HtmlToJSX: React.FC<HtmlToJSXProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlToJSX;
