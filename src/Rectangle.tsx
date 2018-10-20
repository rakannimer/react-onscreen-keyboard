import * as React from "react";

export type RectangleProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export class Rectangle extends React.Component<RectangleProps> {
  render() {
    const { width, height, style = {}, children } = this.props;
    return <div style={{ width, height, ...style }}>{children}</div>;
  }
}
