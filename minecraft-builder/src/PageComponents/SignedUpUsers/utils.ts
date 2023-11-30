import { DynamicField, User } from "../../types";

export const addDynamicFieldToUser = (
  users: User[],
  setUsers: (users: User[]) => void,
  userId: string
) => {
  const updatedUsers = users.map((user) => {
    if (user.id === userId) {
      const newField: DynamicField = {
        id: Date.now(), // or another method to generate a unique id
        name: "New Field",
        value: "",
        type: "text",
      };
      return {
        ...user,
        dynamicFields: [...(user.dynamicFields || []), newField],
      };
    }
    return user;
  });

  setUsers(updatedUsers);
};

export const removeDynamicField = (
  dynamicFields: DynamicField[],
  setDynamicFields: (dynamicFields: DynamicField[]) => void,
  idToRemove: number
) => {
  setDynamicFields(dynamicFields.filter((field) => field.id !== idToRemove));
};

export const handleDynamicFieldChange = (
  dynamicFields: DynamicField[],
  setDynamicFields: (dynamicFields: DynamicField[]) => void,
  idToChange: number,
  newValue: string
) => {
  setDynamicFields(
    dynamicFields.map((field) =>
      field.id === idToChange ? { ...field, value: newValue } : field
    )
  );
};
