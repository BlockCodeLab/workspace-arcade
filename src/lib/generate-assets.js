import generateImage from './generate-image';
import generateSound from './generate-sound';

export default function (assets) {
  return assets.map((asset) => {
    switch (asset.type) {
      case 'image/png':
        return generateImage(asset);
      case 'audio/wav':
        return generateSound(asset);
      default:
        return asset;
    }
  });
}
