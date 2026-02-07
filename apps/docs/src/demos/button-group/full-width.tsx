import {TextAlignCenter, TextAlignLeft, TextAlignRight} from "@gravity-ui/icons";
import {Button, ButtonGroup} from "@vx-oss/heroui-v3-react";

export function FullWidth() {
  return (
    <div className="w-[400px] space-y-3">
      <ButtonGroup fullWidth>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
      <ButtonGroup fullWidth>
        <Button isIconOnly>
          <TextAlignLeft />
        </Button>
        <Button isIconOnly>
          <TextAlignCenter />
        </Button>
        <Button isIconOnly>
          <TextAlignRight />
        </Button>
      </ButtonGroup>
    </div>
  );
}
