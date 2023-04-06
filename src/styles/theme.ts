import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif;",
    button: {
      textTransform: "none",
    },
  },

  palette: {
    primary: {
      main: "#3D405B",
    },
    orange: {
      main: "#E07A5F",
    },
    green: {
      main: "#81B29A",
    },
    yellow: {
      main: "#F2CC8F",
    },
    white: {
      main: "#F4F1DE",
    },
    info: {
      main: "#29b6f6",
    },
    warning: {
      main: "#ffa726",
    },
    success: {
      main: "#66bb6a",
    },
    error: {
      main: "#f44336",
    },
    gray: {
      light: "#F2F4F7",
      main: "#D0D5DD",
      dark: "#475467",
    },
    background: {
      default: "#F4F1DE",
    },
  },
});
