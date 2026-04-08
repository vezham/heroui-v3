import {Checkbox, Label} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <Checkbox id="basic-terms">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="basic-terms">Accept terms and conditions</Label>
      </Checkbox.Content>
    </Checkbox>
  );
}
