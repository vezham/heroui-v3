import {ColorSlider, Label} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <ColorSlider channel="hue" className="w-full max-w-xs" defaultValue="hsl(0, 100%, 50%)">
      <Label>Hue</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider>
  );
}
