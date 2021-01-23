import React from "react";
import { Route, Switch } from "react-router-dom";
import { Keyboard } from "./components/keyboard/keyboard";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "./components/nav-bar";
import styles from "./App.module.scss";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div id="app" className={styles.App}>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/keyboard" exact component={Keyboard} />
        </Switch>
      </div>
      <footer />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
