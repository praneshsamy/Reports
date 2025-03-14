// App.js
import React from "react";
import Reports from "./Components/Reports";
import { projectsList, villaList, reportList } from "./Components/DynamicData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Reports projects={projectsList} villas={villaList} reports={reportList} />
    </div>
  );
};

export default App;
