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
  value: KeyboardEvent["code"] | KeyboardEvent["code"][];
  id: string | string[];
  width: number;
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  code: string | string[];
};

export const defaultRenderKey = (props: KeyboardKeyProps) => {
  const {
    val = { value: "", id: "", width: 0 },
    verticalMargin = 0,
    rowHeight = 0
  } = props;
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
    { value: "`", id: `0_0`, width: 1, code: "Backquote" },
    { value: "1", id: `0_1`, width: 1, code: "Digit1" },
    { value: "2", id: `0_2`, width: 1, code: "Digit2" },
    { value: "3", id: `0_3`, width: 1, code: "Digit3" },
    { value: "4", id: `0_4`, width: 1, code: "Digit4" },
    { value: "5", id: `0_5`, width: 1, code: "Digit5" },
    { value: "6", id: `0_6`, width: 1, code: "Digit6" },
    { value: "7", id: `0_7`, width: 1, code: "Digit7" },
    { value: "8", id: `0_8`, width: 1, code: "Digit8" },
    { value: "9", id: `0_9`, width: 1, code: "Digit9" },
    { value: "0", id: `0_10`, width: 1, code: "Digit0" },
    { value: "-", id: `0_11`, width: 1, code: "Minus" },
    { value: "=", id: `0_12`, width: 1, code: "Equal" },
    { value: "del", id: `0_13`, width: 1.8, code: "Backspace" }
  ],
  [
    { value: "tab", id: `1_0`, code: "Tab", width: 1.8 },
    { value: "q", id: `1_1`, code: "KeyQ", width: 1 },
    { value: "w", id: `1_2`, code: "KeyW", width: 1 },
    { value: "e", id: `1_3`, code: "KeyE", width: 1 },
    { value: "r", id: `1_4`, code: "KeyR", width: 1 },
    { value: "t", id: `1_5`, code: "KeyT", width: 1 },
    { value: "y", id: `1_6`, code: "KeyY", width: 1 },
    { value: "u", id: `1_7`, code: "KeyU", width: 1 },
    { value: "i", id: `1_8`, code: "KeyI", width: 1 },
    { value: "o", id: `1_9`, code: "KeyO", width: 1 },
    { value: "p", id: `1_10`, code: "KeyP", width: 1 },
    { value: "[", id: `1_11`, code: "BracketLeft", width: 1 },
    { value: "]", id: `1_12`, code: "BracketRight", width: 1 },
    { value: "|", id: `1_13`, code: "Backslack", width: 1 }
  ],
  [
    { value: "caps", id: `2_0`, code: "CapsLock", width: 2 },
    { value: "a", id: `2_1`, code: "KeyA", width: 1 },
    { value: "s", id: `2_2`, code: "KeyS", width: 1 },
    { value: "d", id: `2_3`, code: "KeyD", width: 1 },
    { value: "f", id: `2_4`, code: "KeyF", width: 1 },
    { value: "g", id: `2_5`, code: "KeyG", width: 1 },
    { value: "h", id: `2_6`, code: "KeyH", width: 1 },
    { value: "j", id: `2_7`, code: "KeyJ", width: 1 },
    { value: "k", id: `2_8`, code: "KeyK", width: 1 },
    { value: "l", id: `2_9`, code: "KeyL", width: 1 },
    { value: ";", id: `2_10`, code: "Semicolon", width: 1 },
    { value: "'", id: `2_11`, code: "Quote", width: 1 },
    { value: "enter", id: `2_12`, code: "Enter", width: 2 }
  ],
  [
    { value: "shift", id: `3_0`, code: "ShiftLeft", width: 2.5 },
    { value: "z", id: `3_1`, code: "KeyZ", width: 1 },
    { value: "x", id: `3_2`, code: "KeyX", width: 1 },
    { value: "c", id: `3_3`, code: "KeyC", width: 1 },
    { value: "v", id: `3_4`, code: "KeyV", width: 1 },
    { value: "b", id: `3_5`, code: "KeyB", width: 1 },
    { value: "n", id: `3_6`, code: "KeyN", width: 1 },
    { value: "m", id: `3_7`, code: "KeyM", width: 1 },
    { value: ",", id: `3_8`, code: "Comm", width: 1 },
    { value: ".", id: `3_9`, code: "Period", width: 1 },
    { value: "/", id: `3_10`, code: "Slash", width: 1 },
    { value: "shift", id: `3_11`, code: "ShiftRight", width: 2.5 }
  ],
  [
    { value: "fn", id: `3_0`, code: "", width: 1 },
    { value: "ctrl", id: `3_1`, code: "ControlLeft", width: 1 },
    { value: "alt", id: `3_2`, code: "AltLeft", width: 1 },
    { value: "cmd", id: `3_3`, code: "MetaLeft", width: 1 },
    { value: "space", id: `3_4`, code: "Space", width: 6 },
    { value: "cmd", id: `3_5`, code: "MetaRight", width: 1 },
    { value: "alt", id: `3_6`, code: "AltRight", width: 1 },
    { value: "<", id: `3_7`, code: "ArrowLeft", width: 1 },
    {
      value: ["^", "v"],
      id: [`3_8`, `3_9`],
      code: ["ArrowUp", "ArrowDown"],
      width: 1
    },
    { value: ">", id: `3_10`, code: "ArrowRight", width: 1 }
  ]
];
