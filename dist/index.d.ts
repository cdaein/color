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
export declare function hsv2rgb(h: number, s: number, v: number, a: number): number[];
export declare const hsb2rgb: typeof hsv2rgb;
export declare function rgb2hsv(arr: number[]): number[];
export declare function rgb2hsv(r: number, g: number, b: number): number[];
export declare function rgb2hsv(r: number, g: number, b: number, a: number): number[];
export declare function hex2rgb(): void;
//# sourceMappingURL=index.d.ts.map