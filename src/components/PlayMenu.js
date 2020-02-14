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
  const { PlayList, isPlaying } = state;
  const classes = useStyles();

  const SkipPrevSong = () => {
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
    }
  };

  const PlayPause = () => {
    if (PlayList[0].AudioUrl === "") {
      return state;
    } else if (isPlaying) {
      dispatch(onPause());
      console.log("pause");
      // audioElement.pause();
    } else {
      dispatch(onPlay());
      console.log("play");
      // audioElement.play();
    }
  };

  // console.log("playlist", PlayList);
  // console.log("PlayList[0]", PlayList[0].AudioTitle);
  // console.log(isPlaying);

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
              onClick={SkipPrevSong}
            />
          </IconButton>
          <IconButton>
            {isPlaying ? (
              <PauseIcon className={classes.playIcon} onClick={PlayPause} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} onClick={PlayPause} />
            )}
          </IconButton>
          <IconButton>
            <SkipNextIcon className={classes.playIcon} />
          </IconButton>
        </Toolbar>
      </Paper>
    </div>
  );
};

export default PlayMenu;
