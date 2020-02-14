import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Song from "./Song";
import { musicUrl } from "./url";
import { clientId } from "./url";
import "../style/genreSongs.css";
import PlayMenu from "./PlayMenu";
import { useDispatch, useSelector } from "react-redux";
import { onPause, onPlay, setSongData } from "../action/Playsong";

const GenreMusic = ({ match }) => {
  const TargetGenre = match.params.genre;
  const [music, setMusic] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const { PlayList, SongData } = state;

  const getMusicData = async () => {
    const response = await axios.get(
      `${musicUrl}${clientId}&tags=${TargetGenre}`
    );
    setMusic(response.data.collection);
  };

  useEffect(() => {
    getMusicData();
  }, [TargetGenre]);

  useEffect(() => {
    dispatch(setSongData(music));
    console.log("SongData", SongData);
  }, [music]);

  const musicLists = useMemo(() => {
    return music.map((info, index) => {
      return <Song info={info} index={index} />;
    });
  }, [music]);

  return (
    <div>
      <PlayMenu className="PlayMenu" />
      {/* <audio id="audio" src={`${PlayList[0].AudioUrl}${clientId}`}></audio> */}
      <div className="List">{musicLists}</div>
    </div>
  );
};

export default GenreMusic;
