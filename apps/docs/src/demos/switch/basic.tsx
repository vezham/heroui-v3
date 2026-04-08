import {Label, Switch} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label className="text-sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>
  );
}
