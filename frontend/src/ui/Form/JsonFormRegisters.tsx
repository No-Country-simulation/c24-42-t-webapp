import { materialRenderers } from "@jsonforms/material-renderers";
import { customDatePickerTester, customSelectTester, passwordConfirmControlTester } from "./JsonFormTesters";
import PasswordConfirmControl from "@components/custom-controls/PasswordConfirmControl";
import CustomDatePicker from "@components/custom-controls/CustomDatePicker";
import CustomSelect from "@components/custom-controls/CustomSelect";

const renderers = [
  ...materialRenderers,
  { tester: passwordConfirmControlTester, renderer: PasswordConfirmControl },
  { tester: customDatePickerTester, renderer: CustomDatePicker },
  { tester: customSelectTester, renderer: CustomSelect}
];

export default renderers;