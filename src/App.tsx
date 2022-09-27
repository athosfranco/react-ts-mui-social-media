import { useState } from "react";
import MainPage from "./pages/Main/MainPage";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { PaletteMode } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState<string>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <MainPage mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
