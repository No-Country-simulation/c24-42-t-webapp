import { rankWith, scopeEndsWith } from "@jsonforms/core";

export const passwordConfirmControlTester = rankWith(3, scopeEndsWith("repeatPassword"));
export const customDatePickerTester = rankWith(3, scopeEndsWith("customDatePicker"));
export const customSelectTester = rankWith(3, scopeEndsWith("customSelect"));