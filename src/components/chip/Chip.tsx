import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  $$ChipBorderColor: `$colors$${variant}ContainerLine`,
  color: `$On${variant}Container`,
  backgroundColor: `$${variant}Container`,

  "&[aria-selected=true], &[aria-pressed=true]": {
    boxShadow: "none",
    backgroundColor: `$${variant}ContainerActive`,
  },

  "@hover": {
    "&:hover": {
      backgroundColor: `$${variant}ContainerHover`,
    },
  },
  "&:focus-visible": {
    backgroundColor: `$${variant}ContainerHover`,
    outline: "$FocusRing",
  },
  "&:active": {
    backgroundColor: `$${variant}ContainerActive`,
  },
});

export const StyledChip = styled("button", {
  padding: 0,
  margin: 0,
  background: "transparent",
  border: "none",
  appearance: "none",
  WebkitTapHighlightColor: "transparent",

  display: "inline-flex",
  alignItems: "center",
  height: "$$ChipSize",
  color: "CurrentColor",
  borderRadius: "$400",
  cursor: "pointer",

  "&[disabled], &[aria-disabled=true]": {
    opacity: "$Disabled",
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    size: {
      400: {
        $$ChipSize: toRem(24),
        padding: "0 $300",
        gap: "$100",
        "&[data-ui-before=true]": {
          paddingLeft: "$200",
        },
        "&[data-ui-after=true]": {
          paddingRight: "$200",
        },
      },
      500: {
        $$ChipSize: toRem(32),
        padding: "0 $400",
        gap: "$200",
        "&[data-ui-before=true]": {
          paddingLeft: "$300",
        },
        "&[data-ui-after=true]": {
          paddingRight: "$300",
        },
      },
    },
    outlined: {
      true: {
        boxShadow: "inset 0 0 0 $borderWidths$400 $$ChipBorderColor",
      },
    },
  },
  defaultVariants: {
    variant: "Surface",
    size: 400,
  },
});

type ChipVariant = VariantProps<typeof StyledChip>;

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  before?: ReactNode;
  after?: ReactNode;
  css?: CSS;
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps & ChipVariant>(
  ({ before, after, children, ...props }, ref) => (
    <StyledChip
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </StyledChip>
  )
);