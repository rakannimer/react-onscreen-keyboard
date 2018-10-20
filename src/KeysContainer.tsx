import * as React from "react";
import { Rectangle, RectangleProps } from "./Rectangle";

export class KeysContainer extends React.Component<RectangleProps> {
  render() {
    const { width, height, children } = this.props;
    return (
      <Rectangle width={width} height={height}>
        {children}
      </Rectangle>
    );
  }
}
