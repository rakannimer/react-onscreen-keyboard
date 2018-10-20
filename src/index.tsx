import * as React from "react";
import {
  KeyboardKeyVal,
  keyboardKeys as defaultKeyboardKeys,
  KEYBOARD_HEIGHT,
  VERTICAL_SEPARATOR,
  HORIZONTAL_SEPARATOR,
  KEYBOARD_WIDTH
} from "./defaults";

import { KeysContainer } from "./KeysContainer";
import { KeyboardRows } from "./KeyboardRows";
import { KeyboardKeyProps } from "./KeyboardKey";

export type KeyboardProps = {
  width?: number;
  height?: number;
  keyWidth?: number;
  rowHeightPercent?: number;
  rowWidthPercent?: number;
  verticalMargin?: number;
  horizontalMargin?: number;
  overrides?: Map<string, (p: KeyboardKeyProps) => any>;
  keyboardKeys?: KeyboardKeyVal[][];
  renderKey?: (p: KeyboardKeyProps) => any;
  rowStyle?: React.CSSProperties;
  keyStyle?: React.CSSProperties;
};

export class ReactOnScreenKeyboard extends React.Component<KeyboardProps> {
  render() {
    const {
      keyWidth = 50,
      rowHeightPercent = 0.2,
      rowWidthPercent = 1,
      width = KEYBOARD_WIDTH,
      height = KEYBOARD_HEIGHT,
      verticalMargin = VERTICAL_SEPARATOR,
      horizontalMargin = HORIZONTAL_SEPARATOR,
      overrides = new Map(),
      keyboardKeys = defaultKeyboardKeys,
      keyStyle = {},
      rowStyle = {},
      renderKey = () => null
    } = this.props;
    const rowHeight = height * rowHeightPercent;
    const rowWidth = width * rowWidthPercent;
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <KeysContainer width={width} height={height}>
          <KeyboardRows
            keyboardKeys={keyboardKeys}
            rowHeight={rowHeight}
            rowWidth={rowWidth}
            verticalMargin={verticalMargin}
            horizontalMargin={horizontalMargin}
            overrides={overrides}
            keyWidth={keyWidth}
            keyStyle={keyStyle}
            rowStyle={rowStyle}
            renderKey={renderKey}
          />
        </KeysContainer>
      </div>
    );
  }
}

export default ReactOnScreenKeyboard;
