# @daeinc/color

Color utilities. Mostly wrapper functions on existing packages for convenience.

```sh
npm i @daeinc/color
```

then,

```ts
import { hsv2rgb, ... } from "@daeinc/color"
```
## Functions

### hsv2rgb

```ts
function hsv2rgb(val: number): number[];
function hsv2rgb(arr: number[]): number[];
function hsv2rgb(h: number, s: number, v: number): number[];
function hsv2rgb(
  h: number,
  s: number,
  v: number,
  a: number
): number[];
```
Converts HSV/HSB color to RGB. Each channel of the input HSV color must be normalized to `[0, 1]` range.

A typical usage is as follows:

```ts
ctx.strokeStyle = `rgb(${hsv2rgb(0, 1, 1)})` // red
```

### hsb2rgb

```ts
const hsb2rgb: typeof hsv2rgb;
```
Alias for `hsv2rgb`.

### rgb2hsv

```ts
function rgb2hsv(arr: number[]): number[];
function rgb2hsv(r: number, g: number, b: number): number[];
function rgb2hsv(
  r: number,
  g: number,
  b: number,
  a: number
): number[];
```
Converts RGB color to HSV. The out color is normalized to `[0, 1]` range.

### hex2rgb

```ts
function hex2rgb(hex: string): number[];
```
Converts HEX color string to RGB color.

## To dos

- add
  - `rgb2hsl` and `hsl2rgb`
  - `hex2hsv`
- try
  - [`color-functions`](https://github.com/pqx/color-functions)
  - [`color-normalize`](https://github.com/colorjs/color-normalize)

## License

MIT
