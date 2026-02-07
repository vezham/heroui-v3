import {Description, Label, TextArea, TextField} from "@vx-oss/heroui-v3-react";

export function TextAreaExample() {
  return (
    <TextField className="w-full max-w-64" name="message">
      <Label>Message</Label>
      <TextArea placeholder="Write your message here..." rows={4} />
      <Description>Maximum 500 characters</Description>
    </TextField>
  );
}
