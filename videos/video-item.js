import React from "../_snowpack/pkg/react.js";
import {videoIdToSrc} from "./utils.js";
import Vimeo from "./vimeo.js";
const VideoItem = ({v, i}) => {
  const T = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, v.title), v.text && /* @__PURE__ */ React.createElement("p", null, v.text));
  const V = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Vimeo, {
    src: videoIdToSrc(v)
  }));
  if (i % 2 === 0) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, T, V);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, V, T);
};
export default VideoItem;
