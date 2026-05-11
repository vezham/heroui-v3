"use client";

import {Text} from "@vx-oss/heroui-v3-react";

export const RenderProps = () => {
  return (
    <div className="flex max-w-xl flex-col gap-4">
      <Text render={({children, ...domProps}) => <h2 {...domProps}>{children}</h2>} type="h1">
        H1 visual style, h2 semantic element
      </Text>
      <Text render={({children, ...domProps}) => <span {...domProps}>{children}</span>}>
        The render prop can swap the underlying element while preserving HeroUI props and styles.
      </Text>
    </div>
  );
};
