## React On Screen Keyboard

A completely customisable 0 dependency react onscreen keyboard.

## Install

```sh
  yarn add react-onscreen-keyboard
  # Or
  npm i react-onscreen-keyboard
```

## Usage

```jsx
import * as ReactDOM from "react-dom";
import * as React from "react";
import Keyboard from "react-onscreen-keyboard";

ReactDOM.render(
  <Keyboard
    width={900}
    keyStyle={{
      background: "rgba(0,12,12,0.3)",
      borderRadius: "50%"
    }}
  />,
  document.getElementById("app")
);
```

## Props

- width?: number
- height?: number;
- keyWidth?: number;
- rowHeightPercent?: number;
- rowWidthPercent?: number;
- verticalMargin?: number;
- horizontalMargin?: number;
- overrides?: Map<string, (p: KeyboardKeyProps) => JSX.Element>;
- keyboardKeys?: KeyboardKeyVal[][];
- renderKey?: (p: KeyboardKeyProps) => JSX.Element;
- rowStyle?: React.CSSProperties;
- keyStyle?: React.CSSProperties;
