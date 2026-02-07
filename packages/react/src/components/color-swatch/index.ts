import type {ComponentProps} from "react";

import {ColorSwatchRoot} from "./color-swatch";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorSwatch = Object.assign(ColorSwatchRoot, {
  Root: ColorSwatchRoot,
});

export type ColorSwatch = {
  Props: ComponentProps<typeof ColorSwatchRoot>;
  RootProps: ComponentProps<typeof ColorSwatchRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {ColorSwatchRoot};

export type {ColorSwatchRootProps, ColorSwatchRootProps as ColorSwatchProps} from "./color-swatch";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {colorSwatchVariants} from "@vx-oss/heroui-v3-styles";

export type {ColorSwatchVariants} from "@vx-oss/heroui-v3-styles";
