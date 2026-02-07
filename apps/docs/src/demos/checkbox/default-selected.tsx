import {Checkbox, Label} from "@vx-oss/heroui-v3-react";

export function DefaultSelected() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox defaultSelected id="default-notifications">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
      </Checkbox>
      <Label htmlFor="default-notifications">Enable email notifications</Label>
    </div>
  );
}
