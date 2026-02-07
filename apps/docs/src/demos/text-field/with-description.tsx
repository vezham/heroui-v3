import {Description, Input, Label, TextField} from "@vx-oss/heroui-v3-react";

export function WithDescription() {
  return (
    <TextField className="w-full max-w-64" name="username">
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Description>Choose a unique username for your account</Description>
    </TextField>
  );
}
