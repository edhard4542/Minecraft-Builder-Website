export interface DynamicField {
  id: number;
  name: string;
  value: string;
  type: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  minecraftAccountName?: string;
  phoneNumber?: string;
  birthday?: string;
  dynamicFields?: DynamicField[];
}

export interface LoginFormState {
  email: string;
  password: string;
}

export interface SignupFormState {
  firstName: string;
  lastName: string;
  email: string;
  minecraftAccountName: string;
  password: string;
}
