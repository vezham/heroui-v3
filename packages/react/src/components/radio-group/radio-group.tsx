"use client";

import type {RadioGroupVariants} from "@vx-oss/heroui-v3-styles";
import type {ComponentPropsWithRef} from "react";

import {radioGroupVariants} from "@vx-oss/heroui-v3-styles";
import React from "react";
import {RadioGroup as RadioGroupPrimitive} from "react-aria-components";

import {composeTwRenderProps} from "../../utils/compose";

/* -------------------------------------------------------------------------------------------------
 * Radio Group Root
 * -----------------------------------------------------------------------------------------------*/
interface RadioGroupRootProps
  extends ComponentPropsWithRef<typeof RadioGroupPrimitive>, RadioGroupVariants {}

const RadioGroupRoot = ({children, className, variant, ...props}: RadioGroupRootProps) => {
  const styles = React.useMemo(() => radioGroupVariants({variant}), [variant]);

  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      {...props}
      className={composeTwRenderProps(className, styles)}
    >
      {(values) => <>{typeof children === "function" ? children(values) : children}</>}
    </RadioGroupPrimitive>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {RadioGroupRoot};

export type {RadioGroupRootProps};
