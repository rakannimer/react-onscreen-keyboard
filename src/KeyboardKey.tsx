import * as React from "react";
import { KeyboardKeyVal, defaultRenderKey } from "./defaults";
import { KeyboardProps } from "./index";

export type KeyboardKeyProps = {
  val: KeyboardKeyVal;
  rowHeight: number;
} & KeyboardProps;

export class KeyboardKey extends React.Component<KeyboardKeyProps> {
  render() {
    const {
      renderKey = defaultRenderKey,
      overrides = new Map(),
      val: { id, value, code },
      verticalMargin = 0,
      rowHeight
    } = this.props;
    if (overrides.has(id)) {
      return overrides.get(id)(this.props);
    } else if (Array.isArray(value)) {
      return (
        <div
          key={JSON.stringify(id)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: rowHeight - 2 * verticalMargin
          }}
        >
          {value.map((val, i) => (
            <React.Fragment key={i}>
              {renderKey({
                ...this.props,
                val: {
                  ...this.props.val,
                  id: id[i],
                  code: code[i],
                  value: value[i]
                }
              } as KeyboardKeyProps)}
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return renderKey(this.props);
    }
  }
}
