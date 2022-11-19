import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type MainColor = "Primary" | "Secondary" | "Success" | "Warning" | "Critical";

export type ContainerColor =
  | "Background"
  | "Surface"
  | "SurfaceVariant"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Critical";

export type RefOfType<E extends ElementType> = ComponentPropsWithRef<E>["ref"];

type AsProp<E extends ElementType> = {
  as?: E;
};

export type AsComponentProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & AsProp<E>
> & {
  ref?: RefOfType<E>;
};
