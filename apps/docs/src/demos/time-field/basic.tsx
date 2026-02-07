"use client";

import {DateInputGroup, Label, TimeField} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <TimeField className="w-[256px]" name="time">
      <Label>Time</Label>
      <DateInputGroup>
        <DateInputGroup.Input>
          {(segment) => <DateInputGroup.Segment segment={segment} />}
        </DateInputGroup.Input>
      </DateInputGroup>
    </TimeField>
  );
}
