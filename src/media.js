export const isImage = (url) => {
  return url.match(/.(jpeg|jpg|gif|png)$/) !== null;
};

export const isVideo = (url) => {
  return url.match(/.(mp4|ogg|mov|mkv|avi)$/);
};
