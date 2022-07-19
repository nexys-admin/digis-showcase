import React from "react";
import { VideoAndText } from "./type";
import { videoIdToSrc } from "./utils";

import Vimeo from "./vimeo";

const VideoItem = ({ v, i }: { v: VideoAndText; i: number }) => {
  const T = (
    <div>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {v.title}
      </p>
      {v.text && <p>{v.text}</p>}
    </div>
  );
  const V = (
    <div>
      <Vimeo src={videoIdToSrc(v)} />
    </div>
  );

  if (i % 2 === 0) {
    return (
      <>
        {T}
        {V}
      </>
    );
  }

  return (
    <>
      {V}
      {T}
    </>
  );
};

export default VideoItem;
