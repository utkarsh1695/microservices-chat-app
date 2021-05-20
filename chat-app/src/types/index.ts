export interface User {
  username: string;
}


export type RegexValidatorReturnType = {
  valid: boolean;
  error: string;
}
export type RegexValidatorFunction = (value: string) => RegexValidatorReturnType;