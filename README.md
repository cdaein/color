# @daeinc/color

Color utilities. Mostly wrapper functions on existing packages for convenience.

`npm i @daeinc/color`

## Functions

```ts
/**
 * convert normalized grayscale value to RGB
 * @param val grayscale value 0..1
 * @returns RGB color array[3] in 0..255
 */
export declare function hsv2rgb(val: number): number[];
/**
 * convert normalized HSB color to RGB
 * @param arr [h, s, v] or [h, s, v, a]
 * @returns RGB color array[3 or 4] in 0..255
 */
export declare function hsv2rgb(arr: number[]): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @returns RGB color array[3] in 0..255
 */
export declare function hsv2rgb(h: number, s: number, v: number): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @param a alpha 0..1 passed-through
 * @returns RGB color array[4] in 0..255
 */
export declare function hsv2rgb(
  h: number,
  s: number,
  v: number,
  a: number
): number[];
export declare const hsb2rgb: typeof hsv2rgb;
/**
 * convert RGB color to normalized HSV
 * @param arr [r, g, b] or [r, g, b, a]
 * @returns HSV color array[3 or 4] in 0..1
 */
export declare function rgb2hsv(arr: number[]): number[];
/**
 * convert RGB color to normalized HSV
 * @param r red 0..255
 * @param g green 0..255
 * @param b blue 0..255
 * @returns HSV color array[3] in 0..1
 */
export declare function rgb2hsv(r: number, g: number, b: number): number[];
/**
 * convert RGB color to normalized HSV
 * @param r red 0..255
 * @param g green 0..255
 * @param b blue 0..255
 * @param a alpha 0..1
 * @returns HSV color array[4] in 0..1
 */
export declare function rgb2hsv(
  r: number,
  g: number,
  b: number,
  a: number
): number[];
/**
 * converts hexadecimal color to RGB/RGBA.
 *
 * It also supports shorthand hex color with alpha - ex. #f0ac (last char is alpha)
 * @param hex hex color string. ex. `#f0a`, `#ccfa`, `#ff00cc` or `#aacc99ff`
 * @returns [r, g, b] or [r, g, b, a]
 */
export declare function hex2rgb(hex: string): number[];
//# sourceMappingURL=index.d.ts.map
```

## To dos

- add
  - `rgb2hsl` and `hsl2rgb`
  - `hex2hsv`
- try
  - [`color-functions`](https://github.com/pqx/color-functions)
  - [`color-normalize`](https://github.com/colorjs/color-normalize)

## License

MIT
