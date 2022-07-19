import { VimeoVideo } from "./type";

export const videoIdToSrc = ({ videoId, secret }: VimeoVideo) => {
  const url = `https://player.vimeo.com/video/${videoId}`;
  const params: {
    badge: number;
    autopause: number;
    player_id: number;
    app_id: number;
    h?: string;
  } = { badge: 0, autopause: 0, player_id: 0, app_id: 58479 };

  if (secret) {
    params["h"] = secret;
  }

  const paramsString = Object.entries(params)
    .map(([k, v]) => [k, encodeURIComponent(v)].join("="))
    .join("&");

  const r = url + "?" + paramsString;
  console.log(r);
  return r;
};
