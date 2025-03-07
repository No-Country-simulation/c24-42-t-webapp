import { materialRenderers } from "@jsonforms/material-renderers";
import { passwordConfirmControlTester } from "./JsonFormTesters";
import PasswordConfirmControl from "@components/custom-controls/PasswordConfirmControl/PasswordConfirmControl";

const renderers = [
  ...materialRenderers,
  { tester: passwordConfirmControlTester, renderer: PasswordConfirmControl },
];

export default renderers;