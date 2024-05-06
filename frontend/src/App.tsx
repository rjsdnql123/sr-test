import RouterIndex from "./pages/Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { colors } from "@mui/material";
import { useMemo } from "react";
import { useDarkModeStore } from "./store/darkModeStore";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: colors.green[200]
//     }
//   }
// });

function App() {
  const { darkMode } = useDarkModeStore();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: colors.green[200]
          }
        }
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterIndex />
    </ThemeProvider>
  );
}

export default App;
