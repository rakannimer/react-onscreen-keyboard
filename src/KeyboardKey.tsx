import * as React from "react";
import { KeyboardKeyVal, defaultRenderKey } from "./defaults";
import { KeyboardProps } from "./index";

export type KeyboardKeyProps = {
  val: KeyboardKeyVal;
  rowHeight: number;
} & KeyboardProps;

export class KeyboardKey extends React.Component<KeyboardKeyProps> {
  render() {
    return defaultRenderKey(this.props);
  }
}
