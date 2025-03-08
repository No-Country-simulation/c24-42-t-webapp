import { materialRenderers } from "@jsonforms/material-renderers";
import { customDatePickerControlTester, customSelectControlTester, passwordConfirmControlTester } from "./JsonFormTesters";
import PasswordConfirmControl from "@components/custom-controls/PasswordConfirmControl";
import CustomDatePickerControl from "@components/custom-controls/CustomDatePickerControl";
import CustomSelectControl from "@components/custom-controls/CustomSelectControl";

const renderers = [
  ...materialRenderers,
  { tester: passwordConfirmControlTester, renderer: PasswordConfirmControl },
  { tester: customDatePickerControlTester, renderer: CustomDatePickerControl },
  { tester: customSelectControlTester, renderer: CustomSelectControl}
];

export default renderers;