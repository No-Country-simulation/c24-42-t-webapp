import { rankWith, scopeEndsWith } from "@jsonforms/core";

export const passwordConfirmControlTester = rankWith(3, scopeEndsWith("repeatPassword"));


