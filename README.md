## React On Screen Keyboard

A completely customisable react on screen keyboard.

[![CircleCI][circleci-badge]][circleci-href]
[![NPM][npm-version-badge]][npm-href]
[![BundlePhobia][bundlephobia-badge]][bundlephobia-href]

![React On Screen Keyboard Demo](/example.png)

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

[circleci-href]: https://circleci.com/gh/rakannimer/react-onscreen-keyboard
[circleci-badge]: https://img.shields.io/circleci/project/github/rakannimer/react-onscreen-keyboard.svg
[npm-href]: https://www.npmjs.com/package/react-onscreen-keyboard
[npm-version-badge]: https://badgen.net/npm/v/react-onscreen-keyboard
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/react-onscreen-keyboard.svg
[bundlephobia-href]: https://bundlephobia.com/result?p=react-onscreen-keyboard
