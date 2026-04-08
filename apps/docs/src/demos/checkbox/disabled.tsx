import {Checkbox, Description, Label} from "@vx-oss/heroui-v3-react";

export function Disabled() {
  return (
    <Checkbox isDisabled id="feature">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="feature">Premium Feature</Label>
        <Description>This feature is coming soon</Description>
      </Checkbox.Content>
    </Checkbox>
  );
}
