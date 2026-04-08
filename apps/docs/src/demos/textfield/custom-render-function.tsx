"use client";

import {Input, Label, TextField} from "@vx-oss/heroui-v3-react";

export function CustomRenderFunction() {
  return (
    <TextField
      className="w-full max-w-64"
      name="email"
      render={(props) => <div {...props} data-custom="foo" />}
      type="email"
    >
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </TextField>
  );
}
