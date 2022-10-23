import { describe, expect, test } from "@jest/globals";
import { hsv2rgb } from "./index";

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
