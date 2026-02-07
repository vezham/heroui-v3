import {ColorArea} from "@vx-oss/heroui-v3-react";

export function ColorAreaBasic() {
  return (
    <ColorArea defaultValue="rgb(116, 52, 255)">
      <ColorArea.Thumb />
    </ColorArea>
  );
}
