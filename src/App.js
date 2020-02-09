import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import GenreMusic from "./components/genreMusic";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">music-app</header>
      </div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>
          <Link to="/aaaa">aaaa</Link>
        </Button>
        <Button>bbbb</Button>
        <Button>cccc</Button>
        <Button>dddd</Button>
      </ButtonGroup>
      <div>
        <Switch>
          <Route to="/:genre" component={GenreMusic} />
          <Redirect to="/" component={GenreMusic} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
