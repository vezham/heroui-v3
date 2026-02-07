import {Checkbox, Label} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="basic-terms">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
      </Checkbox>
      <Label htmlFor="basic-terms">Accept terms and conditions</Label>
    </div>
  );
}
