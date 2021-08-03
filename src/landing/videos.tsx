import React from "react";

import Vimeo from "./vimeo";

const VideosAndText: { title: string; videoId: number; text?: string }[] = [
  { title: "Onboarding", videoId: 561867939 },
  { title: "Onboarding #2", videoId: 561869509 },
  {
    title: "Onboarding #3",
    text: "accounting - account fuction types",
    videoId: 561870292,
  },
  { title: "Regus", text: "Example of an IBAN payment", videoId: 560990229 },
  { title: "Byjuno", text: "Example of a BVR payment", videoId: 560807962 },
  {
    title: "Reconciliation",
    text: "Basic account reconciliation",
    videoId: 573976726,
  },
];

const videoIdToSrc = (videoId: number) =>
  `https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;

export default () => (
  <div className="p-12 bg-white h-200">
    <div className={"grid grid-cols-2 gap-4"}>
      {VideosAndText.map((v, i) => {
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
            <Vimeo src={videoIdToSrc(v.videoId)} />
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
      })}
    </div>
  </div>
);
