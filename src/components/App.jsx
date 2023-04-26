import React from "react";
import Source from "./Source";
import Input from "./Input";

function App() {
  return (
    <div className="container-fluid main text-center container-sm  container-lg">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-12 parent d-flex align-items-center justify-content-center">
          <Input />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Source />
        </div>
      </div>
    </div>
  );
}

export default App;
