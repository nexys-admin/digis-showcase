import React from "../_snowpack/pkg/react.js";
import Videos from "./videos.js";
import * as Config from "../config.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Videos, null), /* @__PURE__ */ React.createElement("p", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
    href: Config.github.sha
  }, Config.version))));
};
