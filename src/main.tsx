import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UserIsLogged from "./components/libs/UserIsLogged.tsx";
import Login from "./components/Login.tsx";
import SyncWithDB from "./components/libs/SyncWithDB.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserIsLogged loginMethod={<Login />}>
      <SyncWithDB />
      <App />
    </UserIsLogged>
  </React.StrictMode>
);
