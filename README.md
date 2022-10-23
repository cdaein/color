# @daeinc/color

Color utilities. Mostly wrapper functions on existing packages for convenience.

`npm i @daeinc/color`

## To dos

- back to back conversion does not return the original value. ex. `hsv2rgb(rgb2hsv(128, 127, 108))`
- not equal: `expect(hex2rgb("#80808080")[3]).toBeCloseTo(0.5);`
- add `rgb2hsl` and `hsl2rgb`
- try
  - [`color-functions`](https://github.com/pqx/color-functions)
  - [`color-normalize`](https://github.com/colorjs/color-normalize)

## License

MIT
