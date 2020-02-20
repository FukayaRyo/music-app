import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import GenreMusic from "./components/genreSongs";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">fukaya-music-App</header>
      </div>
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
