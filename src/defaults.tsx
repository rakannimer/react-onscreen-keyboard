import * as React from "react";
import { KeyboardKeyProps } from "./KeyboardKey";
import { Rectangle } from "./Rectangle";
export const KEYBOARD_WIDTH = 500;
export const KEYBOARD_HEIGHT = 300;
export const ROW_HEIGHT = KEYBOARD_HEIGHT / 5;
export const ROW_WIDTH = KEYBOARD_WIDTH;
export const VERTICAL_SEPARATOR = 5;
export const HORIZONTAL_SEPARATOR = 5;

export type KeyboardKeyVal = {
  value: any | any[];
  id: string | string[];
  width: number;
};

export const defaultRenderKey = (props: KeyboardKeyProps) => {
  const {
    val = { value: "", id: "", width: 0 },
    verticalMargin = 0,
    rowHeight = 0,
    overrides = new Map()
  } = props;
  if (overrides.has(val.id)) {
    return overrides.get(val.id)(props);
  }
  if (Array.isArray(val.value)) {
    const value = val.value as string[];
    return (
      <Rectangle
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: rowHeight - 2 * verticalMargin
        }}
      >
        {value.map((value, i) => (
          <Rectangle
            key={`${val.value}_${i}`}
            width={40 * val.width}
            height={rowHeight / 2 - verticalMargin}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {value}
          </Rectangle>
        ))}
      </Rectangle>
    );
  }
  return val.value;
};

export const keyboardKeys: KeyboardKeyVal[][] = [
  [
    { value: "`", id: `0_0`, width: 1 },
    { value: "1", id: `0_1`, width: 1 },
    { value: "2", id: `0_2`, width: 1 },
    { value: "3", id: `0_3`, width: 1 },
    { value: "4", id: `0_4`, width: 1 },
    { value: "5", id: `0_5`, width: 1 },
    { value: "6", id: `0_6`, width: 1 },
    { value: "7", id: `0_7`, width: 1 },
    { value: "8", id: `0_8`, width: 1 },
    { value: "9", id: `0_9`, width: 1 },
    { value: "0", id: `0_10`, width: 1 },
    { value: "-", id: `0_11`, width: 1 },
    { value: "=", id: `0_12`, width: 1 },
    { value: "del", id: `0_13`, width: 1.8 }
  ],
  [
    { value: "tab", id: `1_0`, width: 1.8 },
    { value: "q", id: `1_1`, width: 1 },
    { value: "w", id: `1_2`, width: 1 },
    { value: "e", id: `1_3`, width: 1 },
    { value: "r", id: `1_4`, width: 1 },
    { value: "t", id: `1_5`, width: 1 },
    { value: "y", id: `1_6`, width: 1 },
    { value: "u", id: `1_7`, width: 1 },
    { value: "i", id: `1_8`, width: 1 },
    { value: "o", id: `1_9`, width: 1 },
    { value: "p", id: `1_10`, width: 1 },
    { value: "[", id: `1_11`, width: 1 },
    { value: "]", id: `1_12`, width: 1 },
    { value: "|", id: `1_13`, width: 1 }
  ],
  [
    { value: "caps", id: `2_0`, width: 2 },
    { value: "a", id: `2_1`, width: 1 },
    { value: "s", id: `2_2`, width: 1 },
    { value: "d", id: `2_3`, width: 1 },
    { value: "f", id: `2_4`, width: 1 },
    { value: "g", id: `2_5`, width: 1 },
    { value: "h", id: `2_6`, width: 1 },
    { value: "j", id: `2_7`, width: 1 },
    { value: "k", id: `2_8`, width: 1 },
    { value: "l", id: `2_9`, width: 1 },
    { value: ";", id: `2_10`, width: 1 },
    { value: "'", id: `2_11`, width: 1 },
    { value: "]", id: `2_12`, width: 1 },
    { value: "enter", id: `2_13`, width: 2 }
  ],
  [
    { value: "shift", id: `3_0`, width: 2.5 },
    { value: "z", id: `3_1`, width: 1 },
    { value: "x", id: `3_2`, width: 1 },
    { value: "c", id: `3_3`, width: 1 },
    { value: "v", id: `3_4`, width: 1 },
    { value: "b", id: `3_5`, width: 1 },
    { value: "n", id: `3_6`, width: 1 },
    { value: "m", id: `3_7`, width: 1 },
    { value: ",", id: `3_8`, width: 1 },
    { value: ".", id: `3_9`, width: 1 },
    { value: "/", id: `3_10`, width: 1 },
    { value: "shift", id: `3_11`, width: 2.5 }
  ],
  [
    { value: "fn", id: `3_0`, width: 1 },
    { value: "ctrl", id: `3_1`, width: 1 },
    { value: "alt", id: `3_2`, width: 1 },
    { value: "cmd", id: `3_3`, width: 1 },
    { value: "space", id: `3_4`, width: 6 },
    { value: "cmd", id: `3_5`, width: 1 },
    { value: "alt", id: `3_6`, width: 1 },
    { value: "<", id: `3_7`, width: 1 },
    { value: ["^", "v"], id: [`3_8`, `3_9`], width: 1 },
    { value: ">", id: `3_10`, width: 1 }
  ]
];
