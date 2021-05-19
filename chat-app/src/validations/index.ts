import { RegexValidatorReturnType } from "../types";

export const REGEX = {
  mobile: /^[6-9]\d{9}/,
  text: '',
  email: ''
};

export const mobileValidator = (value: string): RegexValidatorReturnType => ({
  valid: REGEX.mobile.test(value),
  error: 'Invalid Mobile No.'
});
export const textValidator = (value: string): RegexValidatorReturnType => ({
  valid: true,
  error: "Error"
});
export const emailValidator = (value: string): RegexValidatorReturnType => ({
  valid: true,
  error: "Error"
});

export const validations = {
  mobile: mobileValidator,
  text: textValidator,
  email: emailValidator
};