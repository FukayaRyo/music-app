import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { onPause, onPlay, setUrl } from "../action/Playsong";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles(theme => ({
  root: {
    "@media screen and (min-width: 500px)": {
      display: "flex",
      backgroundColor: "white",
      width: 200,
      height: 220,
      margin: 5,
      color: "rgba(0, 0, 88, 0.87)"
    },
    "@media screen and (max-width: 500px)": {
      display: "flex",
      backgroundColor: "white",
      width: 146,
      height: 180,
      margin: 5,
      color: "rgba(0, 0, 88, 0.87)"
    }
  },
  playingSong: {
    "@media screen and (min-width: 500px)": {
      display: "flex",
      backgroundColor: "lightsteelblue",
      width: 200,
      height: 220,
      margin: 5,
      color: "rgba(0, 0, 88, 0.87)",
      zIndex: 2,
      opacity: 0.7,
      border: "solid"
    },
    "@media screen and (max-width: 500px)": {
      display: "flex",
      backgroundColor: "lightsteelblue",
      width: 146,
      height: 180,
      margin: 5,
      color: "rgba(0, 0, 88, 0.87)",
      zIndex: 2,
      opacity: 0.7,
      border: "solid"
    }
  },
  containar: {
    margin: "auto"
  },
  cover: {
    "@media screen and (min-width: 500px)": {
      height: 150,
      border: "outset",
      borderWidth: "thin",
      objectFit: "contain"
    },
    "@media screen and (max-width: 500px)": {
      height: 80,
      border: "outset",
      borderWidth: "thin",
      objectFit: "contain"
    }
  },
  content: {
    height: 12,
    zIndex: 1
  },
  title: {
    "@media screen and (min-width: 500px)": {
      fontSize: 12
    },
    "@media screen and (max-width: 500px)": {
      fontSize: 8
    }
  }
}));

export default function Song({ info, index }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const { isPlaying, PlayList } = state;

  const songUrl = info.stream_url;
  const songTitle = info.title;
  const songPhoto = info.artwork_url;

  const audioElement = document.getElementById("audio");

  const togglePlay = () => {
    if (PlayList[0].AudioUrl !== info.stream_url) {
      dispatch(setUrl(songUrl, songTitle, songPhoto));
      setTimeout(() => audioElement.play(), 1000);
    } else {
      if (isPlaying) {
        dispatch(onPause());
        audioElement.pause();
      } else {
        dispatch(onPlay());
        setTimeout(() => audioElement.play(), 1000);
      }
    }
  };

  const playingSong =
    PlayList[0].AudioUrl === info.stream_url
      ? classes.playingSong
      : classes.root;

  return (
    <Card className={playingSong} key={index} onClick={togglePlay}>
      <CardActionArea className={classes.containar}>
        <CardMedia className={classes.cover} image={info.artwork_url} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{info.title}</Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
