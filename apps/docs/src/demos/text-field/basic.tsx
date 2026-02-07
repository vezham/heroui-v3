import {Input, Label, TextField} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <TextField className="w-full max-w-64" name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </TextField>
  );
}
