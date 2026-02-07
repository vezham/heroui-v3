import {Label, Slider} from "@vx-oss/heroui-v3-react";

export function Disabled() {
  return (
    <Slider isDisabled className="w-full max-w-xs" defaultValue={30}>
      <Label>Volume</Label>
      <Slider.Output />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>
  );
}
