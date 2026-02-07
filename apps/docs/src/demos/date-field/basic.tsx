"use client";

import {DateField, DateInputGroup, Label} from "@vx-oss/heroui-v3-react";

export function Basic() {
  return (
    <DateField className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateInputGroup>
        <DateInputGroup.Input>
          {(segment) => <DateInputGroup.Segment segment={segment} />}
        </DateInputGroup.Input>
      </DateInputGroup>
    </DateField>
  );
}
