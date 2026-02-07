import {Switch} from "@vx-oss/heroui-v3-react";

export function WithoutLabel() {
  return (
    <Switch aria-label="Enable notifications">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  );
}
