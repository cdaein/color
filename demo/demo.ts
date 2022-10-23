import { hsv2rgb, hex2rgb } from "../index";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
document.body.appendChild(canvas);

const width = 600;
const height = 600;

canvas.width = width;
canvas.height = height;

ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, width, height);

//---------- hsv2rgb()
// [h, s, v]
let colRGB;

ctx.save();
ctx.translate(0, 0);
colRGB = hsv2rgb([0, 1, 1]);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(50, 50, 100, 100);

colRGB = hsv2rgb([0.2, 1, 1]);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(200, 50, 100, 100);
ctx.restore();

// [h, s, v, a]
ctx.save();
ctx.translate(300, 0);
colRGB = hsv2rgb([0, 1, 1, 1]);
ctx.fillStyle = `rgba(${colRGB})`;
ctx.fillRect(50, 50, 100, 100);

colRGB = hsv2rgb([0.2, 1, 1, 0.5]);
ctx.fillStyle = `rgba(${colRGB})`;
ctx.fillRect(200, 50, 100, 100);
ctx.restore();

// h, s, v
ctx.save();
ctx.translate(0, 200);
colRGB = hsv2rgb(0, 1, 1);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(50, 50, 100, 100);

colRGB = hsv2rgb(0.2, 1, 1);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(200, 50, 100, 100);
ctx.restore();

// h, s, v, a
ctx.save();
ctx.translate(300, 200);
colRGB = hsv2rgb(0, 1, 1, 1);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(50, 50, 100, 100);

colRGB = hsv2rgb(0.2, 1, 1, 0.5);
ctx.fillStyle = `rgb(${colRGB})`;
ctx.fillRect(200, 50, 100, 100);
ctx.restore();

//---------- hex2rgb()
let rgb;
// rgb = hex2rgb("#ff0000");
// console.log(rgb);

rgb = hex2rgb("#ff000080");
// console.log(rgb);

// rgb = hex2rgb("#f00");
// console.log(rgb);

// rgb = hex2rgb("#f008");
// console.log(rgb);
