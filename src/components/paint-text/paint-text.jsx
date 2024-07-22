import { useEditor } from '@blockcode/core';
import { Text } from '@blockcode/ui';

export default function PaintText() {
  const { fileList, selectedFileId } = useEditor();
  if (selectedFileId === null) {
    return (
      <Text
        id="arcade.pixelPaint.default"
        defaultMessage="Painter"
      />
    );
  }

  if (selectedFileId === fileList[0].id) {
    return (
      <Text
        id="arcade.pixelPaint.backdrops"
        defaultMessage="Backdrops"
      />
    );
  }

  return (
    <Text
      id="arcade.pixelPaint.costumes"
      defaultMessage="Costumes"
    />
  );
}
