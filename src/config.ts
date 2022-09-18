import * as Stitches from "@stitches/react";
import "@fontsource/inter/variable.css";

export type { VariantProps } from "@stitches/react";

export const {
  prefix,
  styled,
  css,
  globalCss,
  theme,
  createTheme,
  keyframes,
  getCssText,
  config,
  reset,
} = Stitches.createStitches({
  theme: {
    fonts: {
      Inter: "InterVariable, 'Inter', -apple-system, 'Segoe UI', 'Helvetica', 'Arial', sans-serif",
    },
    fontSizes: {
      D400: "45px",

      H1: "35px",
      H2: "25px",
      H3: "20px",
      H4: "18px",
      H5: "16px",
      H6: "14px",

      T400: "15px",
      T300: "14px",
      T200: "12px",

      B500: "16px",
      B400: "14px",
      B300: "12px",

      L400: "12px",
      O400: "12px",
      C400: "12px",
    },
    lineHeights: {
      D400: "52px",

      H1: "40px",
      H2: "30px",
      H3: "26px",
      H4: "24px",
      H5: "22px",
      H6: "18px",

      T400: "22px",
      T300: "20px",
      T200: "18px",

      B500: "20px",
      B400: "18px",
      B300: "16px",

      L400: "16px",
      O400: "16px",
      C400: "16px",
    },
    letterSpacings: {
      D400: "0",

      H1: "0",
      H2: "0",
      H3: "0",
      H4: "0",
      H5: "0",
      H6: "0",

      T400: "0",
      T300: "0",
      T200: "0",

      B500: "0",
      B400: "0",
      B300: "0",

      L400: "0",
      O400: "0",
      C400: "0",
    },
    fontWeights: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    space: {
      0: "0",
      100: "4px",
      200: "8px",
      300: "12px",
      400: "16px",
      500: "20px",
      600: "24px",
      700: "32px",
    },
    radii: {
      0: "0",
      300: "4px",
      400: "8px",
      500: "12px",
      Round: "50%",
      Pill: "9999px",
    },
    borderWidths: {
      0: "0",
      300: "1px",
      400: "1.5px",
      500: "2px",
      600: "3px",
      700: "4px",
    },
    zIndices: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      Max: "999",
    },
    shadows: {
      E100: "0px 1px 2px rgba(0, 0, 0, 0.2)",
      E200: "0px 1px 6px rgba(0, 0, 0, 0.2)",
      E300: "0px 2px 8px rgba(0, 0, 0, 0.2)",
      E400: "0px 4px 16px rgba(0, 0, 0, 0.2)",
    },
    sizes: {
      X50: "16px",
      X100: "18px",
      X200: "20px",
      X300: "22px",
      X400: "24px",
      X500: "28px",
      X600: "32px",
    },
    opacity: {
      P400: 1,
      P300: 0.9,
      P200: 0.75,
      Disabled: 0.3,
    },
    colors: {
      BackgroundContainer: "#F2F2F2",
      BackgroundContainerHover: "#E5E5E5",
      BackgroundContainerActive: "#D9D9D9",
      BackgroundContainerLine: "#CCCCCC",
      OnBackgroundContainer: "#000000",

      SurfaceContainer: "#FFFFFF",
      SurfaceContainerHover: "#F2F2F2",
      SurfaceContainerActive: "#E5E5E5",
      SurfaceContainerLine: "#D9D9D9",
      OnSurfaceContainer: "#000000",

      SurfaceVariantContainer: "#F2F2F2",
      SurfaceVariantContainerHover: "#E5E5E5",
      SurfaceVariantContainerActive: "#D9D9D9",
      SurfaceVariantContainerLine: "#CCCCCC",
      SurfaceVariantOnContainer: "#000000",

      Primary: "#1858D5",
      PrimaryHover: "#164FC0",
      PrimaryActive: "#144BB5",
      PrimaryLine: "#1346AA",
      OnPrimary: "#FFFFFF",
      PrimaryContainer: "#E8EEFB",
      PrimaryContainerHover: "#DCE6F9",
      PrimaryContainerActive: "#D1DEF7",
      PrimaryContainerLine: "#C5D5F5",
      OnPrimaryContainer: "#113E95",

      Secondary: "#000000",
      SecondaryHover: "#1A1A1A",
      SecondaryActive: "#262626",
      SecondaryLine: "#333333",
      OnSecondary: "#FFFFFF",
      SecondaryContainer: "#E5E5E5",
      SecondaryContainerHover: "#D9D9D9",
      SecondaryContainerActive: "#CCCCCC",
      SecondaryContainerLine: "#BFBFBF",
      OnSecondaryContainer: "#0D0D0D",

      Success: "#00844C",
      SuccessHover: "#007744",
      SuccessActive: "#007041",
      SuccessLine: "#006A3D",
      OnSuccess: "#FFFFFF",
      SuccessContainer: "#E5F3ED",
      SuccessContainerHover: "#D9EDE4",
      SuccessContainerActive: "#CCE6DB",
      SuccessContainerLine: "#BFE0D2",
      OnSuccessContainer: "#005C35",

      Warning: "#A85400",
      WarningHover: "#974C00",
      WarningActive: "#8F4700",
      WarningLine: "#864300",
      OnWarning: "#FFFFFF",
      WarningContainer: "#F6EEE5",
      WarningContainerHover: "#F2E5D9",
      WarningContainerActive: "#EEDDCC",
      WarningContainerLine: "#E9D4BF",
      OnWarningContainer: "#763B00",

      Critical: "#C40E0E",
      CriticalHover: "#AC0909",
      CriticalActive: "#A60C0C",
      CriticalLine: "#9C0B0B",
      OnCritical: "#FFFFFF",
      CriticalContainer: "#F9E7E7",
      CriticalContainerHover: "#F6DBDB",
      CriticalContainerActive: "#F3CFCF",
      CriticalContainerLine: "#F0C3C3",
      OnCriticalContainer: "#890A0A",
    },
  },
  themeMap: {
    ...Stitches.defaultThemeMap,
    opacity: "opacity",
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "$Inter",
  },
});
globalStyles();
