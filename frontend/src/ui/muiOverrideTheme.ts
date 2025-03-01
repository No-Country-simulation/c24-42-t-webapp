import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#198751",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Inria Sans",
        fontWeight: 400
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: "#25C274", // Color del label cuando el input está enfocado
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "#4DDB94", // Color del borde al hacer hover
          }
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minHeight: "90px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "0",
          padding: "0"
        },
      }
    }
  }
});