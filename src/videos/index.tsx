import React from "react";

import Videos from "./videos";
import * as Config from "../config";

export default () => {
  return (
    <>
      <Videos />
      <p className={"p-8"}>
        <small>
          <a href={Config.github.sha}>{Config.version}</a>
        </small>
      </p>
    </>
  );
};
