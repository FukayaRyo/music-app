// import React, { useState } from "react";

// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [, _forceUpdate] = useState(false);
//   const forceUpdate = () => _forceUpdate(prevState => !prevState);

//   React.useEffect(() => {
//     audio.play();
//     audio.addEventListener("play", forceUpdate);
//     audio.addEventListener("pause", forceUpdate);
//     audio.addEventListener("ended", forceUpdate);
//     audio.addEventListener("timeupdate", forceUpdate);

//     return () => {
//       audio.removeEventListener("play", forceUpdate);
//       audio.removeEventListener("pause", forceUpdate);
//       audio.removeEventListener("ended", forceUpdate);
//       audio.removeEventListener("timeupdate", forceUpdate);
//     };
//   }, [url]);

//   const play = () => audio.play();
//   const pause = () => audio.pause();
//   const jump = value => (audio.currentTime += value);

//   return [!audio.paused, audio.currentTime, play, pause, jump];
// };

// export default useAudio;
