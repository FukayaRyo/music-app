import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import GenreMusic from "./components/genreSongs";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">music-app</header>
      </div>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        className="Button"
      >
        <Button>
          <Link to="/music/chill">CHILL</Link>
        </Button>
        <Button>
          <Link to="/music/deep">DEEP</Link>
        </Button>
        <Button>
          <Link to="/music/dubstep">DUBSTEP</Link>
        </Button>
        <Button>
          <Link to="/music/house">HOUSE</Link>
        </Button>
        <Button>
          <Link to="/music/progressive">PROGRESSIVE</Link>
        </Button>
        <Button>
          <Link to="/music/tech">TECH</Link>
        </Button>
        <Button>
          <Link to="/music/trance">TRANCE</Link>
        </Button>
        <Button>
          <Link to="/music/tropical">TROPICAL</Link>
        </Button>
      </ButtonGroup>
      <div className="App-containar">
        <Switch>
          <Route path="/music/:genre" component={GenreMusic} />
          <Redirect to="/music/chill" component={GenreMusic} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
