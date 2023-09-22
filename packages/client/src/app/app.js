import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Topbar from "../header/topbar";
import Footer from "../footer/footer";
import { AppRoutes } from "../app/appRoutes";

export let theme = createTheme({
  palette: {
    colorRed: {
      main: "#FF0000",
    },
    secondary: {
      main: "#B4F573",
    },
    colorBlue: {
      main: "#66A3FD",
    },
    colorMaroon: {
      main: "#5E0202",
    },
    colorOrange04624: {
      main: "rgba(220, 80, 2, 0.4624)",
    },
    colorOrangeBlog: {
      main: "#C38063",
    },
    colorGrey: {
      main: "rgba(155, 37, 37, 0)",
    },
    colorWhite: {
      main: "#FFFFFF",
    },
    colorMaroonFonce: {
      main: "#BE0000",
    },
    colorOrange087: {
      main: "rgba(220, 80, 2, 0.87)",
    },
    colorOrange: {
      main: "#ff9a23",
    },
    colorBrown: {
      main: "#9B2525",
    },
    colorBlack: {
      main: "#000000",
    },
    colorRed: {
      main: "rgba(155, 37, 37, 0)",
    },
    colorOrangeed701d: {
      main: "#ed701d",
    },
    colorViolet: {
      main: "#8C689D",
    },
  },
  //background: linear-gradient(180deg, rgba(220, 80, 2, 0.4624) 43.23%, rgba(155, 37, 37, 0) 100%);
  //background: linear-gradient(
  //  180deg,
  //  ${({ theme }) => theme.palette.colorOrange04624.main} 43.23%,
  //  ${({ theme }) => theme.palette.colorWhite.main} 100%
  //);

  //background: linear-gradient(180deg, #BE0000 13.54%, rgba(220, 80, 2, 0.87) 57.29%, #9B2525 100%);
  //background: linear-gradient(
  //  180deg,
  //  ${({ theme }) => theme.palette.colorMaroonFonce.main} 13.54%,
  //  ${({ theme }) => theme.palette.colorOrange087.main} 57.29%,
  //  ${({ theme }) => theme.palette.colorBrown.main} 100%
  //);

  typography: {
    h1: {
      fontFamily: "Wallpoet,cursive",
      // fontSize: "15rem",
    },
    h2: {
      fontFamily: "Kiwi Maru,serif",
      // fontSize: "8rem",
    },
    h3: {
      fontFamily: "Kiwi Maru,serif",
    },

    body1: {
      fontFamily: "Kiwi Maru,serif",
    },
    body2: {
      fontFamily: "Wallpoet,cursive",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Topbar />
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
