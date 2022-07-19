import React from "react";

// https://gist.github.com/christophengelmayer/0edd4d9b6fdeb6ff551fb80d957fd35d
const Vimeo = ({ src }: { src: string }) => {
  return (
    <div className="relative" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="onboarding"
      />
    </div>
  );
};

export default Vimeo;
