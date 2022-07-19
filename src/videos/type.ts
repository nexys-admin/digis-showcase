export interface VimeoVideo {
  videoId: number;
  secret?: string;
}

export interface VideoAndText extends VimeoVideo {
  title: string;

  text?: string;
}
