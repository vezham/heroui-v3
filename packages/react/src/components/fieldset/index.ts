import type {ComponentProps} from "react";

import {FieldGroup, FieldsetActions, FieldsetLegend, FieldsetRoot} from "./fieldset";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Fieldset = Object.assign(FieldsetRoot, {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
  Group: FieldGroup,
  Actions: FieldsetActions,
});

export type Fieldset = {
  Props: ComponentProps<typeof FieldsetRoot>;
  RootProps: ComponentProps<typeof FieldsetRoot>;
  LegendProps: ComponentProps<typeof FieldsetLegend>;
  GroupProps: ComponentProps<typeof FieldGroup>;
  ActionsProps: ComponentProps<typeof FieldsetActions>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {FieldsetRoot, FieldsetLegend, FieldGroup, FieldsetActions};

export type {
  FieldsetRootProps,
  FieldsetRootProps as FieldsetProps,
  FieldsetLegendProps,
  FieldGroupProps,
  FieldsetActionsProps,
} from "./fieldset";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {fieldsetVariants} from "@vx-oss/heroui-v3-styles";

export type {FieldsetVariants} from "@vx-oss/heroui-v3-styles";
