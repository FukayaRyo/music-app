import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Music from "./Music";
import { musicUrl } from "./url";
import { useAudio } from "react-use";

const GenreMusic = () => {
  const [music, setMusic] = useState([]);
  const getMusicData = async () => {
    const response = await axios.get(musicUrl);
    setMusic(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getMusicData();
  }, [musicUrl]);

  const [audio] = useAudio({});

  const musicLists = useMemo(() => {
    return music.map((info, index) => {
      return (
        <div key={index}>
          <Music info={info} index={index} />
        </div>
      );
    });
  }, [music]);

  return (
    <div>
      {audio}
      <div>{musicLists}</div>
    </div>
  );
};

export default GenreMusic;
