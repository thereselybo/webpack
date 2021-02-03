import React from "react";
import moment from "moment";

const timeNow = moment().format("MMMM Do YYYY, h:mm:ss a");

function App() {
  return (
    <div>
      Hello world
      {timeNow}
    </div>
  );
}

export default App;
