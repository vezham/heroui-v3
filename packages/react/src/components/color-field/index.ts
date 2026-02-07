import type {ComponentProps} from "react";

import {ColorFieldRoot} from "./color-field";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorField = Object.assign(ColorFieldRoot, {
  Root: ColorFieldRoot,
});

export type ColorField = {
  Props: ComponentProps<typeof ColorFieldRoot>;
  RootProps: ComponentProps<typeof ColorFieldRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {ColorFieldRoot};

export type {
  ColorFieldRootProps,
  ColorFieldRootProps as ColorFieldProps,
  ColorValue,
} from "./color-field";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {colorFieldVariants} from "@vx-oss/heroui-v3-styles";

export type {ColorFieldVariants} from "@vx-oss/heroui-v3-styles";
