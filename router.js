import React from "./_snowpack/pkg/react.js";
import {Route, Switch, BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import Videos from "./videos/index.js";
import {basename} from "./config.js";
import {links} from "./links.js";
export default () => {
  return /* @__PURE__ */ React.createElement(Router, {
    basename
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: links.landing.link,
    component: Videos
  })));
};
