import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default mainTheme;
