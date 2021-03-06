import * as ReactDOM from "react-dom";
import * as React from "react";

// import Keyboard from "../dist/index.esm";
import Keyboard from "../src/";

const entries = (obj: any) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc.push([cur, obj[cur]]);
    return acc;
  }, []);
};

const overrides = new Map(
  entries({
    "0_0": a => (
      <button
        style={{
          width: "100%",
          height: "100%",
          background: "skyblue",
          border: "none"
        }}
        onClick={() => {
          alert("Clicked " + a.keyCode);
        }}
      >
        ~
      </button>
    )
  })
);

ReactDOM.render(
  <Keyboard
    width={900}
    keyStyle={{
      background: "rgba(0,12,12,0.3)",
      borderRadius: "80%"
    }}
    // overrides={overrides}
    renderKey={({ val: { code, value } }) => {
      return (
        <button
          style={{
            background: "none",
            border: "none",
            width: "100%",
            height: "100%"
          }}
          onClick={() => {
            console.log(`Pressed ${code}`);
          }}
        >
          {value}
        </button>
      );
    }}
  />,
  document.getElementById("app")
);
