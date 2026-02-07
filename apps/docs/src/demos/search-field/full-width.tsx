import {Label, SearchField} from "@vx-oss/heroui-v3-react";

export function FullWidth() {
  return (
    <div className="w-[400px] space-y-4">
      <SearchField fullWidth name="search">
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>
  );
}
