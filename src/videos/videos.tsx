import React from "react";
import { videosAndText, videosAndText2022 } from "./data";

import VideoItem from "./video-item";

export default () => (
  <div className="p-12 bg-white h-200">
    <div className={"grid grid-cols-2 gap-4"}>
      {videosAndText2022.map((v, i) => (
        <VideoItem key={i} v={v} i={i} />
      ))}
    </div>

    <hr />

    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Videos 2021
    </h3>

    <div className={"grid grid-cols-2 gap-4"}>
      {videosAndText.map((v, i) => (
        <VideoItem key={i} v={v} i={i} />
      ))}
    </div>
  </div>
);
