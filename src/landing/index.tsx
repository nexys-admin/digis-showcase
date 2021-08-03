import React from "react";

import Videos from "./videos";
import * as Config from "../config";

export default () => {
  return (
    <>
      <Videos />
      <p className={"p-8"}>
        <small>{Config.sha}</small>
      </p>
    </>
  );
};
