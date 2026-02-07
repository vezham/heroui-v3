"use client";

import {Button} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return <Button onPress={() => console.log("Button pressed")}>Click me</Button>;
}
