import { materialRenderers } from "@jsonforms/material-renderers";
import { customDatePickerTester, passwordConfirmControlTester } from "./JsonFormTesters";
import PasswordConfirmControl from "@components/custom-controls/PasswordConfirmControl/PasswordConfirmControl";
import CustomDatePicker from "@components/custom-controls/CustomDatePicker";

const renderers = [
  ...materialRenderers,
  { tester: passwordConfirmControlTester, renderer: PasswordConfirmControl },
  { tester: customDatePickerTester, renderer: CustomDatePicker },

];

export default renderers;