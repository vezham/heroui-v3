import {Checkbox, Description, Label} from "@vx-oss/heroui-v3-react";

export function Invalid() {
  return (
    <Checkbox isInvalid name="agreement">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="agreement">I agree to the terms</Label>
        <Description>You must accept the terms to continue</Description>
      </Checkbox.Content>
    </Checkbox>
  );
}
