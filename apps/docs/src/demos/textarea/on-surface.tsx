import {Surface, TextArea} from "@vx-oss/heroui-v3-react";

export function OnSurface() {
  return (
    <Surface className="w-full rounded-3xl p-6">
      <TextArea
        className="w-full min-w-[280px]"
        placeholder="Describe your product"
        variant="secondary"
      />
    </Surface>
  );
}
