"use client";

import {Label, Switch} from "@vx-oss/heroui-v3-react";

export function CustomRenderFunction() {
  return (
    <Switch render={(props) => <label {...props} data-custom="foo" />}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Label className="text-sm">Enable notifications</Label>
    </Switch>
  );
}
