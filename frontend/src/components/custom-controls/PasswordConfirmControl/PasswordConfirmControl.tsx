import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { TextField, Box } from "@mui/material";

const PasswordConfirmControl = ({ data, path, errors, handleChange }: ControlProps) => {
  const password = data?.password || "";
  const repeatPassword = data?.repeatPassword || "";

  const passwordsMatch = password === repeatPassword;
  const hasError = repeatPassword !== "" && !passwordsMatch;
  console.log(errors);
  return (
    <Box>
      <TextField
        type="password"
        label="Contraseña"
        value={password}
        fullWidth
        onChange={(event) => handleChange(`${path}.password`, (event.target.value as string))}
      />
      <TextField
        type="password"
        label="Repetir Contraseña"
        value={repeatPassword}
        fullWidth
        onChange={(event) => handleChange(`${path}.repeatPassword`, (event.target.value as string))}
        error={hasError}
        helperText={hasError ? "Las contraseñas no coinciden" : ""}
      />
    </Box>
  );
};

export default withJsonFormsControlProps(PasswordConfirmControl);
