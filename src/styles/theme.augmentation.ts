import {
  ColorPartial,
  SimplePaletteColorOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    orange?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    yellow?: SimplePaletteColorOptions;
    white?: SimplePaletteColorOptions;
    gray?: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    orange?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    yellow?: SimplePaletteColorOptions;
    white?: SimplePaletteColorOptions;
    gray?: SimplePaletteColorOptions;
  }

  type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;
}
