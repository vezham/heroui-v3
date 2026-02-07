import {Button, ButtonGroup} from "@vx-oss/heroui-v3-react";

export function WithoutSeparator() {
  return (
    <ButtonGroup hideSeparator>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  );
}
