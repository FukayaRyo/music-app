import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "../style/GenreBar.css";

const GenreBar = ({ match }) => {
  const targetGenre = match.params.genre;
  const genreList = [
    { name: "CHILL", url: "chill" },
    { name: "DEEP", url: "deep" },
    { name: "DUBSTEP", url: "dubstep" },
    { name: "HOUSE", url: "house" },
    { name: "PROGRESSIVE", url: "progressive" },
    { name: "TECH", url: "tech" },
    { name: "TRANCE", url: "trance" },
    { name: "TROPICAL", url: "tropical" }
  ];
  const genrebutton = genreList.map((v, i) => {
    const buttonClass = targetGenre === v.url ? "ClickButton" : "Buttons";
    return (
      <Button className={buttonClass} key={i}>
        <a href={`/music/${v.url}`}>{v.name}</a>
      </Button>
    );
  });

  return (
    <div className="GenreBar">
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        className="ButtonGroup"
      >
        {genrebutton}
      </ButtonGroup>
    </div>
  );
};

export default GenreBar;
