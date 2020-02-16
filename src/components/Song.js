import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { onPause, onPlay, setUrl } from "../action/Playsong";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../style/Song.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    width: 200,
    height: 220,
    margin: 5,
    color: "rgba(0, 0, 88, 0.87)"
  },
  containar: {
    margin: "auto"
  },
  cover: {
    height: 150,
    border: "outset",
    borderWidth: "thin",
    objectFit: "contain"
  },
  content: {
    height: 12
  },
  title: {
    fontSize: 11
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
      console.log("NewSongPlay");
      setTimeout(() => audioElement.play(), 1000);
    } else {
      if (isPlaying) {
        dispatch(onPause());
        console.log("pause");
        audioElement.pause();
      } else {
        dispatch(onPlay());
        console.log("play");
        setTimeout(() => audioElement.play(), 1000);
      }
    }
  };

  return (
    <Card className={classes.root} key={index} onClick={togglePlay}>
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
