import * as React from "react";
import { render } from "react-testing-library";
import Keyboard from "../";

describe("Keyboard", () => {
  test("Renders", async () => {
    const { getAllByText } = render(<Keyboard />);
    const result = getAllByText("3");
    expect(result.length).toEqual(1);
  });
});
