export const initialState = {
  PlayList: [
    {
      AudioTitle: "* NO PLAYING SONG",
      AudioUrl: "",
      AudiophotoUrl:
        "https://i1.sndcdn.com/artworks-000041124475-2lu7vg-large.jpg"
    }
  ],
  isPlaying: false,
  SongData: []
};

export const songReducer = (state, action) => {
  switch (action.type) {
    case "SETSONGDATA":
      return {
        ...state,
        SongData: action.songData
      };
    case "ON_PAUSE":
      return { ...state, isPlaying: false };
    case "ON_PLAY":
      return { ...state, isPlaying: true };
    case "SETURL":
      return {
        ...state,
        PlayList: [
          {
            AudioTitle: action.songTitle,
            AudioUrl: action.songUrl,
            AudiophotoUrl: action.songPhoto
          },
          ...state.PlayList
        ],
        isPlaying: true
      };
    default:
      return state;
  }
};
