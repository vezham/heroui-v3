import type {EmptyStateVariants} from "@vx-oss/heroui-v3-styles";
import type {ComponentPropsWithRef} from "react";

import {emptyStateVariants} from "@vx-oss/heroui-v3-styles";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * EmptyState Root
 * -----------------------------------------------------------------------------------------------*/
interface EmptyStateRootProps extends ComponentPropsWithRef<"div">, EmptyStateVariants {}

const EmptyStateRoot = ({children, className, ...rest}: EmptyStateRootProps) => {
  return (
    <div className={emptyStateVariants({className})} data-slot="empty-state" {...rest}>
      {children || "No results found"}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {EmptyStateRoot};

export type {EmptyStateRootProps};
