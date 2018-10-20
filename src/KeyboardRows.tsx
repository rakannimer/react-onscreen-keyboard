import * as React from "react";
import {
  keyboardKeys as defaultKeyboardKeys,
  KeyboardKeyVal
} from "./defaults";
import { Rectangle } from "./Rectangle";
import { KeyboardKey } from "./KeyboardKey";
import { KeyboardProps } from "./index";

export type KeyboardRowsProps = KeyboardProps & {
  rowWidth: number;
  rowHeight: number;
};

export class KeyboardRows extends React.Component<KeyboardRowsProps> {
  render() {
    const {
      keyboardKeys = defaultKeyboardKeys,
      rowWidth = 100,
      rowHeight = 10,
      verticalMargin = 5,
      horizontalMargin = 5,
      overrides = new Map(),
      keyWidth = 40,
      rowStyle = {},
      keyStyle = {},
      renderKey
    } = this.props;
    return (
      <React.Fragment>
        {keyboardKeys.map((rowKeys: KeyboardKeyVal[], i) => (
          <Rectangle
            key={i}
            width={rowWidth}
            height={rowHeight}
            style={{
              display: "flex",
              justifyContent: "space-between",
              ...rowStyle
            }}
          >
            {rowKeys.map((val, i) => (
              <Rectangle
                key={JSON.stringify(val.id)}
                width={keyWidth * val.width}
                height={rowHeight - 2 * verticalMargin}
                style={{
                  // background: "rgba(0,0,0,0.5)",
                  marginLeft: horizontalMargin / 2,
                  marginRight: horizontalMargin / 2,
                  marginTop: verticalMargin,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...keyStyle
                }}
              >
                <KeyboardKey
                  val={val}
                  verticalMargin={verticalMargin}
                  rowHeight={rowHeight}
                  overrides={overrides}
                  renderKey={renderKey}
                />
              </Rectangle>
            ))}
          </Rectangle>
        ))}
      </React.Fragment>
    );
  }
}
