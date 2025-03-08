import { createTheme } from "@mui/material";
import { esES } from "@mui/x-date-pickers/locales";

export const theme = createTheme(
  {
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
          fontWeight: 400,
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'p',
            body2: 'span',
          },
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
  },
  esES
);