export type DynamicField = {
  id: number;
  name: string;
  value: string;
  type: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  birthday?: string;
  dynamicFields?: DynamicField[];
};
