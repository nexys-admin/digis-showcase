import React from "react";
import { videosAndText2022 } from "./data";

import VideoItem from "./video-item";

export default () => (
  <div className="p-12 bg-white h-200">
    <div className={"grid grid-cols-2 gap-4"}>
      {videosAndText2022.map((v, i) => (
        <VideoItem key={i} v={v} i={i} />
      ))}
    </div>
  </div>
);
