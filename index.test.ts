import { describe, expect, test } from "@jest/globals";
import { hsv2rgb, rgb2hsv, hex2rgb } from "./index";

describe("hsv2rgb()", () => {
  test("throws error when arguments are incorrect", () => {
    expect(() => hsv2rgb([0.4])).toThrow(
      "doesn't support the type or length of arguments provided"
    );
    expect(() => hsv2rgb([0.4, 1])).toThrow(
      "doesn't support the type or length of arguments provided"
    );
  });
  test("handles single argument of array[h, s, v]", () => {
    expect(hsv2rgb([0, 0, 1])).toEqual([255, 255, 255]);
    expect(hsv2rgb([0, 1, 1])).toEqual([255, 0, 0]);
    expect(hsv2rgb([0.5, 1, 1])).toEqual([0, 255, 255]);
  });
  test("handles single argument of array[h, s, v, a]", () => {
    expect(hsv2rgb([0, 0, 1, 1])).toEqual([255, 255, 255, 1]);
    expect(hsv2rgb([0, 1, 1, 0])).toEqual([255, 0, 0, 0]);
    expect(hsv2rgb([0.5, 1, 1, 0.35])).toEqual([0, 255, 255, 0.35]);
  });
  test("handles 3 arguments of (h, s, v)", () => {
    expect(hsv2rgb(1, 1, 1)).toEqual([255, 0, 0]);
    expect(hsv2rgb(0, 0, 0)).toEqual([0, 0, 0]);
    expect(hsv2rgb(0, 0, 1)).toEqual([255, 255, 255]);
  });
  test("handles 4 arguments of (h, s, v, a)", () => {
    expect(hsv2rgb(1, 1, 1, 0.9)).toEqual([255, 0, 0, 0.9]);
    expect(hsv2rgb(0, 0, 0, 1)).toEqual([0, 0, 0, 1]);
    expect(hsv2rgb(0, 0, 1, 0)).toEqual([255, 255, 255, 0]);
  });
  test("wraps hue values beyond 1 and convert to RGB", () => {
    expect(hsv2rgb(0, 1, 1)).toEqual([255, 0, 0]);
    expect(hsv2rgb(2, 1, 1)).toEqual([255, 0, 0]);
    expect(hsv2rgb(0, 1, 1, 1)).toEqual([255, 0, 0, 1]);
    expect(hsv2rgb(2, 1, 1, 0)).toEqual([255, 0, 0, 0]);
    expect(hsv2rgb(0.5, 1, 1)).toEqual([0, 255, 255]);
    expect(hsv2rgb(2.5, 1, 1)).toEqual([0, 255, 255]);
    expect(hsv2rgb([0.5, 1, 1])).toEqual([0, 255, 255]);
    expect(hsv2rgb([2.5, 1, 1])).toEqual([0, 255, 255]);
    expect(hsv2rgb([0.5, 1, 1, 0.2])).toEqual([0, 255, 255, 0.2]);
    expect(hsv2rgb([2.5, 1, 1, 0.5])).toEqual([0, 255, 255, 0.5]);
  });
  test("clamps saturation & value to 0..1 range", () => {
    expect(hsv2rgb(0, 3, 2)).toEqual([255, 0, 0]);
    expect(hsv2rgb(0.5, 3, 2)).toEqual([0, 255, 255]);
    expect(hsv2rgb(0, 3, 2, 0.4)).toEqual([255, 0, 0, 0.4]);
    expect(hsv2rgb(0.5, 3, 2, 0.33)).toEqual([0, 255, 255, 0.33]);
    expect(hsv2rgb([0, 3, 2])).toEqual([255, 0, 0]);
    expect(hsv2rgb([0.5, 3, 2])).toEqual([0, 255, 255]);
    expect(hsv2rgb([0, 3, 2, 0.4])).toEqual([255, 0, 0, 0.4]);
    expect(hsv2rgb([0.5, 3, 2, 0.33])).toEqual([0, 255, 255, 0.33]);
  });
});

describe("rgb2hsv()", () => {
  test("throws error when arguments are incorrect", () => {
    expect(() => rgb2hsv([0.4])).toThrow(
      "doesn't support the type or length of arguments provided"
    );
    expect(() => rgb2hsv([0.4, 1])).toThrow(
      "doesn't support the type or length of arguments provided"
    );
  });
  test("handles single argument of array[r, g, b]", () => {
    expect(rgb2hsv([255, 255, 255])).toEqual([0, 0, 1]);
    expect(rgb2hsv([255, 0, 0])).toEqual([0, 1, 1]);
    expect(rgb2hsv([0, 255, 255])).toEqual([0.5, 1, 1]);
  });
  test("handles single argument of array[r, g, b, a]", () => {
    expect(rgb2hsv([255, 255, 255, 1])).toEqual([0, 0, 1, 1]);
    expect(rgb2hsv([255, 0, 0, 0])).toEqual([0, 1, 1, 0]);
    expect(rgb2hsv([0, 255, 255, 0.35])).toEqual([0.5, 1, 1, 0.35]);
  });
  test("handles 3 arguments of (r, g, b)", () => {
    expect(rgb2hsv(255, 0, 0)).toEqual([0, 1, 1]);
    expect(rgb2hsv(0, 0, 0)).toEqual([0, 0, 0]);
    expect(rgb2hsv(255, 255, 255)).toEqual([0, 0, 1]);
  });
  test("handles 4 arguments of (r, g, b, a)", () => {
    expect(rgb2hsv(255, 0, 0, 0.9)).toEqual([0, 1, 1, 0.9]);
    expect(rgb2hsv(0, 0, 0, 1)).toEqual([0, 0, 0, 1]);
    expect(rgb2hsv(255, 255, 255, 0)).toEqual([0, 0, 1, 0]);
  });
  test("wraps each channel value around 255 and convert to HSV", () => {
    // TODO: if not available, either find another library or implement myself
  });
});

describe("hex2rgb()", () => {
  test("handles #rgb formatted value", () => {
    expect(hex2rgb("#f00")).toEqual([255, 0, 0]);
    expect(hex2rgb("#fff")).toEqual([255, 255, 255]);
    expect(hex2rgb("#808080")).toEqual([128, 128, 128]);
  });
  test("handles #rgba formatted value", () => {
    expect(hex2rgb("#f00f")).toEqual([255, 0, 0, 1]);
    expect(hex2rgb("#fff0")).toEqual([255, 255, 255, 0]);
  });
  test("handles #rrggbb formatted value", () => {
    expect(hex2rgb("#0000ff")).toEqual([0, 0, 255]);
    expect(hex2rgb("#ffff00")).toEqual([255, 255, 0]);
    expect(hex2rgb("#800000")).toEqual([128, 0, 0]);
  });
  test("handles #rrggbbaa formatted value", () => {
    expect(hex2rgb("#ff0000ff")).toEqual([255, 0, 0, 1]);
    expect(hex2rgb("#ffffff00")).toEqual([255, 255, 255, 0]);
    // FIX: not exactly 0.5
    expect(hex2rgb("#80808080")[3]).toBeCloseTo(0.5);
  });
});

describe("back to back conversion hsv<-->rgb", () => {
  test("returns original value when hsv => rgb => hsv", () => {
    expect(rgb2hsv(hsv2rgb(0.5, 1, 1))).toEqual([0.5, 1, 1]);
    expect(rgb2hsv(hsv2rgb(0.5, 0.3, 0.4))).toEqual([0.5, 0.3, 0.4]);
    expect(rgb2hsv(hsv2rgb(0.5, 0.35, 0.41))).toEqual([0.5, 0.35, 0.41]); // up to 2 digits, but not always
  });
  test("returns original value when rgb => hsv => rgb", () => {
    expect(hsv2rgb(rgb2hsv(128, 0, 0))).toEqual([128, 0, 0]);
    // FIX: small discrepancy when converted back. solution: limit the precision with integer op
    // expect(hsv2rgb(rgb2hsv(128, 127, 108))).toEqual([128, 127, 108]);
  });
});

// describe("back to back conversion rgb<-->hex", () => {
// test("returns original value when hex => rgb => hex", () => {
// expect(hex2rgb("#ff0000"))
// })
// })
