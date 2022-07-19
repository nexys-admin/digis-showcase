import React from "../_snowpack/pkg/react.js";
const Vimeo = ({src}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative",
    style: {paddingTop: "56.25%"}
  }, /* @__PURE__ */ React.createElement("iframe", {
    className: "absolute inset-0 w-full h-full",
    src,
    frameBorder: "0",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true,
    title: "onboarding"
  }));
};
export default Vimeo;
