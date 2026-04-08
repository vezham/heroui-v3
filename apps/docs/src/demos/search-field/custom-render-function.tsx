"use client";

import {Label, SearchField} from "@vx-oss/heroui-v3-react";

export function CustomRenderFunction() {
  return (
    <SearchField name="search" render={(props) => <div {...props} data-custom="foo" />}>
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}
