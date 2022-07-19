export const videoIdToSrc = ({videoId, secret}) => {
  const url = `https://player.vimeo.com/video/${videoId}`;
  const params = {badge: 0, autopause: 0, player_id: 0, app_id: 58479};
  if (secret) {
    params["h"] = secret;
  }
  const paramsString = Object.entries(params).map(([k, v]) => [k, encodeURIComponent(v)].join("=")).join("&");
  const r = url + "?" + paramsString;
  console.log(r);
  return r;
};
