import {ColorArea} from "@vx-oss/heroui-v3-react";

export function ColorAreaDisabled() {
  return (
    <ColorArea isDisabled defaultValue="hsl(200, 100%, 50%)">
      <ColorArea.Thumb />
    </ColorArea>
  );
}
