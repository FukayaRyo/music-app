import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useDispatch, useSelector } from "react-redux";
import "../style/PlayMenu.css";
import Paper from "@material-ui/core/Paper";
import { onPause, onPlay, setUrl } from "../action/Playsong";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    color: "rgba(0, 0, 88, 0.87)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {}
}));

const PlayMenu = () => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const { PlayList, isPlaying, SongData } = state;
  const classes = useStyles();

  const audioElement = document.getElementById("audio");

  const skipPrevSong = () => {
    if (PlayList[0].AudioUrl === "") {
      return state;
    } else {
      dispatch(
        setUrl(
          PlayList[1].AudioUrl,
          PlayList[1].AudioTitle,
          PlayList[1].AudiophotoUrl
        )
      );
      setTimeout(() => audioElement.play(), 1000);
    }
  };

  const playPause = () => {
    if (PlayList[0].AudioUrl === "") {
      return state;
    } else if (isPlaying) {
      dispatch(onPause());
      console.log("pause");
      audioElement.pause();
    } else {
      dispatch(onPlay());
      console.log("play");
      audioElement.play();
    }
  };

  const songIndex = SongData.findIndex(
    v => v.stream_url === PlayList[0].AudioUrl
  );

  const skipNextSong = () => {
    if (SongData[songIndex]) {
      dispatch(
        setUrl(
          SongData[songIndex + 1].stream_url,
          SongData[songIndex + 1].title,
          SongData[songIndex + 1].artwork_url
        )
      );
      setTimeout(() => audioElement.play(), 1000);
    }
    return;
  };

  return (
    <div className={classes.root}>
      <Paper className="paper">
        <Toolbar>
          <img src={PlayList[0].AudiophotoUrl} alt="" />
          <div className="titlebox">
            <Typography variant="h6" className={classes.title}>
              {PlayList[0].AudioTitle}
            </Typography>
          </div>
          <IconButton aria-label="previous">
            <SkipPreviousIcon
              className={classes.playIcon}
              onClick={skipPrevSong}
            />
          </IconButton>
          <IconButton>
            {isPlaying ? (
              <PauseIcon className={classes.playIcon} onClick={playPause} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} onClick={playPause} />
            )}
          </IconButton>
          <IconButton>
            <SkipNextIcon className={classes.playIcon} onClick={skipNextSong} />
          </IconButton>
        </Toolbar>
      </Paper>
    </div>
  );
};

export default PlayMenu;
