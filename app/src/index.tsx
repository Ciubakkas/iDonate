import React from "react";
import "./index.css";
// import "./assets/tailwind.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { engine } from "@c11/engine.runtime";
import { render } from "@c11/engine.react";
import { state } from "./state";
import "./global";

const app = engine({
  state,
  // use: [render(<App />, "#root", { debug: process.env.NODE_ENV === "development" })],
  use: [render(<App />, "#root", { debug: false })],
});

app.start();

// (window as any).db = engine.getContext().db;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
