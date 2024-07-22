import UPNG from 'upng-js';
import imageContour, { ALPHA_THRESHOLD } from './image-contour';

const color16 = (r, g, b) => {
  if (r === 0 && g === 0 && b === 0) {
    r = 0;
    g = 4;
    b = 0;
  }
  return ((r & 0xf8) << 8) | ((g & 0xfc) << 3) | (b >> 3);
};

const base64ToArrayBuffer = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray.buffer;
};

export default function ({ id, name, type, data, width, height, centerX, centerY }) {
  const buffer = base64ToArrayBuffer(data);
  const rgba = new Uint8Array(UPNG.toRGBA8(UPNG.decode(buffer))[0]);

  const contour = imageContour({
    width,
    height,
    data: rgba,
  });
  const contourData = JSON.stringify(contour).replaceAll('[', '(').replaceAll(']', ',)').replaceAll('(,)', '()');

  const imageData = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) << 2;
      const r = rgba[i + 0];
      const g = rgba[i + 1];
      const b = rgba[i + 2];
      const a = rgba[i + 3];
      const color = a < ALPHA_THRESHOLD ? 0x0000 : color16(r, g, b);
      imageData.push(color & 0xff); // low
      imageData.push((color >> 8) & 0xff); // high
    }
  }

  const moduleName = `image${id}`;

  let imageModule = '';
  imageModule += 'from micropython import const\n';
  imageModule += `ID = "${id}"\n`;
  imageModule += `NAME = "${name}"\n`;
  imageModule += `WIDTH = const(${width})\n`;
  imageModule += `HEIGHT = const(${height})\n`;
  imageModule += `CENTER_X = const(${centerX})\n`;
  imageModule += `CENTER_Y = const(${centerY})\n`;
  imageModule += `CONTOUR = ${contourData}\n`;
  imageModule += `dirpath = '/'.join(__file__.split('/')[0:-1])\n`;
  imageModule += `f = open(f"{dirpath}/${id}", "b")\n`;
  imageModule += `_BITMAP = f.read()\n`;
  imageModule += `f.close()\n`;
  imageModule += `BITMAP = memoryview(_BITMAP)\n`;

  return [
    {
      id,
      type,
      content: Uint8Array.from(imageData),
    },
    {
      id: moduleName,
      type: 'text/x-python',
      content: imageModule,
    },
  ];
}
