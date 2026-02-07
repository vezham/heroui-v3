"use client";

import type {MenuVariants} from "@vx-oss/heroui-v3-styles";
import type {ComponentPropsWithRef} from "react";

import {menuVariants} from "@vx-oss/heroui-v3-styles";
import React from "react";
import {Menu as MenuPrimitive} from "react-aria-components";

import {composeTwRenderProps} from "../../utils";

/* -------------------------------------------------------------------------------------------------
 * Menu Root
 * -----------------------------------------------------------------------------------------------*/
interface MenuRootProps<T extends object>
  extends ComponentPropsWithRef<typeof MenuPrimitive<T>>, MenuVariants {
  className?: string;
}

function MenuRoot<T extends object>({className, ...props}: MenuRootProps<T>) {
  const styles = React.useMemo(() => menuVariants(), []);

  return (
    <MenuPrimitive
      className={composeTwRenderProps(className, styles)}
      data-slot="menu"
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {MenuRoot};

export type {MenuRootProps};
