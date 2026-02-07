"use client";

import {Label, Switch} from "@vx-oss/heroui-v3-react";

export function RenderProps() {
  return (
    <Switch>
      {({isSelected}) => (
        <>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label className="text-sm">{isSelected ? "Enabled" : "Disabled"}</Label>
        </>
      )}
    </Switch>
  );
}
