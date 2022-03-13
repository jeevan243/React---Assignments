import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Forms } from "./components/form";

function App() {
  const [showdata, setshowdata] = useState(true);

  return (
    <div className="App">
      {showdata ? <Forms /> : null}
      <br />
      <br />

      <div>
        <button
          onClick={() => {
            setshowdata(showdata ? false : true);
          }}
        >
          Show Data
        </button>
      </div>
    </div>
  );
}

export default App;
