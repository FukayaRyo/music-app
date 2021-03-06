import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Song from "./Song";
import { musicUrl } from "./url";
import { clientId } from "./url";
import "../style/genreSongs.css";
import PlayMenu from "./PlayMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSongData } from "../action/Playsong";
import GenreBar from "./GenreBar";

const GenreMusic = ({ match }) => {
  const targetGenre = match.params.genre;
  const [music, setMusic] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const { PlayList } = state;

  const getMusicData = async () => {
    const response = await axios.get(
      `${musicUrl}&${clientId}&tags=${targetGenre}`
    );
    setMusic(response.data.collection);
  };

  useEffect(() => {
    getMusicData();
  }, [targetGenre]);

  useEffect(() => {
    dispatch(setSongData(music));
  }, [music]);

  const musicLists = useMemo(() => {
    return music.map((info, index) => {
      return <Song info={info} index={index} />;
    });
  }, [music]);

  const viewPlayMenu = useMemo(() => {
    if (PlayList.length > 1)
      return (
        <div className="PlayMenu">
          <PlayMenu />
        </div>
      );
    return <div />;
  }, [PlayList.length > 1]);

  return (
    <div>
      <GenreBar match={match} />
      {viewPlayMenu}
      <audio id="audio" src={`${PlayList[0].AudioUrl}?${clientId}`}></audio>
      <div className="List">{musicLists}</div>
    </div>
  );
};

export default GenreMusic;
