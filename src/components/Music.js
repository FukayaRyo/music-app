import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import useAudio from "./useAudio";
import { clientId } from "./url";
// import { useAudio, setState } from "react-use";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "grey",
    width: 700,
    margin: 50
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151,
    float: "right"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function Music({ info, index }) {
  const classes = useStyles();
  const theme = useTheme();

  const [playing, currentTime, play, pause, jump] = useAudio(
    `${info.stream_url}${clientId}`
  );

  // const [audio, state, controls, ref] = useAudio({
  //   src: `${info.stream_url}${clientId}`,
  //   autoPlay: false
  // });

  const url = useAudio;
  console.log("url", url);

  // console.log("paused", state.paused);

  return (
    <div>
      <Card className={classes.root} key={index}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {info.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {info.created_at}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <div>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon
                  className={classes.playIcon}
                  onClick={playing ? pause : play}
                />
              </IconButton>
            </div>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={info.artwork_url}
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}
