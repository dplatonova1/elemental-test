import React from "react";
import css from "./App.module.css";
import Report from "./components/report/report";

function App() {
  return (
    <div className={css.app}>
      <Report />
    </div>
  );
}

export default App;
