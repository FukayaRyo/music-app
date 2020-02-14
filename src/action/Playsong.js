export const onPause = () => ({
  type: "ON_PAUSE"
});

export const onPlay = () => ({
  type: "ON_PLAY"
});

export const setUrl = (songUrl, songTitle, songPhoto) => ({
  songTitle,
  songUrl,
  songPhoto,
  type: "SETURL"
});

export const setTitle = songTitle => ({
  songTitle,
  type: "SETTITLE"
});

export const setSongData = songData => ({
  songData,
  type: "SETSONGDATA"
});
