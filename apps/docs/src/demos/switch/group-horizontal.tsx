import {Label, Switch, SwitchGroup} from "@vx-oss/heroui-v3-react";

export function GroupHorizontal() {
  return (
    <SwitchGroup className="overflow-x-auto" orientation="horizontal">
      <Switch name="notifications">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label className="text-sm">Notifications</Label>
      </Switch>
      <Switch name="marketing">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label className="text-sm">Marketing</Label>
      </Switch>
      <Switch name="social">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label className="text-sm">Social</Label>
      </Switch>
    </SwitchGroup>
  );
}
