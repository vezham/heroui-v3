import type {ComponentProps} from "react";

import {SwitchControl, SwitchIcon, SwitchRoot, SwitchThumb} from "./switch";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Icon: SwitchIcon,
});

export type Switch = {
  Props: ComponentProps<typeof SwitchRoot>;
  RootProps: ComponentProps<typeof SwitchRoot>;
  ControlProps: ComponentProps<typeof SwitchControl>;
  ThumbProps: ComponentProps<typeof SwitchThumb>;
  IconProps: ComponentProps<typeof SwitchIcon>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {SwitchRoot, SwitchControl, SwitchIcon, SwitchThumb};

export type {
  SwitchRootProps,
  SwitchRootProps as SwitchProps,
  SwitchControlProps,
  SwitchThumbProps,
  SwitchIconProps,
} from "./switch";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {switchVariants} from "@vx-oss/heroui-v3-styles";

export type {SwitchVariants} from "@vx-oss/heroui-v3-styles";
