import { FormEvent, useEffect, useState } from "react";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import { DynamicField, User } from "../../types";
import { useUserData, useUserState } from "./hooks";
import { handleDynamicFieldChange } from "./utils";

export const SignedUpUsers = () => {
  const { users, setUsers, getUsers, addUser, updateUser, deleteUser } =
    useUserData();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const email = useUserState("");
  const firstName = useUserState("");
  const lastName = useUserState("");
  const phoneNumber = useUserState("");
  const birthday = useUserState("");
  const [dynamicFields, setDynamicFields] = useState<DynamicField[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState<string | null>(null);

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  const handleEditClick = (user: User) => {
    setEditingUser({ ...user }); // Clone the user object for editing
    setEditUserId(user.id);
    setIsEditing(true);
  };

  const handleEditSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editUserId && editingUser) {
      await updateUser(editUserId, editingUser);
      // Reset state
      setEditUserId(null);
      setIsEditing(false);
      setEditingUser(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addUser({
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    });
  };

  const onAddField = () => {
    if (editingUser) {
      const newField: DynamicField = {
        id: Date.now(),
        name: "New Field",
        value: "",
        type: "text",
      };
      setEditingUser({
        ...editingUser,
        dynamicFields: [...(editingUser.dynamicFields || []), newField],
      });
    }
  };

  const onDynamicFieldChange = (id: number, value: string) => {
    handleDynamicFieldChange(dynamicFields, setDynamicFields, id, value);
  };

  const handleDeleteUser = (userEmail: string) => {
    deleteUser(userEmail);
  };

  console.log(users, "users");

  return (
    <div className="user-list-container">
      <Navigation />
      <ul className="user-list">
        {users.map((user: User, index) => (
          <li key={index} className="user-list-item">
            <div>
              <strong>First Name:</strong> {user.firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {user.lastName}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            {user.phoneNumber && user.phoneNumber.length && (
              <div>
                <strong>Phone Number:</strong> {user.phoneNumber}
              </div>
            )}
            {user.birthday && user.birthday.length && (
              <div>
                <strong>Birthday:</strong> {user.birthday}
              </div>
            )}
            {dynamicFields.map((field) => (
              <div key={field.id}>
                <input
                  type={field.type}
                  placeholder={field.name}
                  value={field.value}
                  onChange={(e) =>
                    onDynamicFieldChange(field.id, e.target.value)
                  }
                />
              </div>
            ))}
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
          </li>
        ))}
      </ul>

      {isEditing && editingUser && (
        <div className="edit-user-modal">
          <form onSubmit={handleEditSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email.value}
                onChange={email.handleChange}
                required
              />
              <input
                type="text"
                placeholder="First Name"
                value={firstName.value}
                onChange={firstName.handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName.value}
                onChange={lastName.handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber.value}
                onChange={phoneNumber.handleChange}
              />
              <input
                type="date"
                placeholder="Birthday"
                value={birthday.value}
                onChange={birthday.handleChange}
              />
              {editingUser &&
                editingUser.dynamicFields?.map((field, index) => (
                  <input
                    key={field.id}
                    type={field.type}
                    placeholder={field.name}
                    value={field.value}
                    onChange={(e) => {
                      if (editingUser && editingUser.dynamicFields) {
                        const updatedFields = [...editingUser.dynamicFields];
                        updatedFields[index] = {
                          ...field,
                          value: e.target.value,
                        };
                        setEditingUser({
                          ...editingUser,
                          dynamicFields: updatedFields,
                        });
                      }
                    }}
                  />
                ))}
              <button type="button" onClick={onAddField}>
                Add Field
              </button>
              <button type="submit">Update User</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="signup-container">
        <h2>Sign up for more content</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email.value}
            onChange={email.handleChange}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName.value}
            onChange={firstName.handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName.value}
            onChange={lastName.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <FooterPage />
    </div>
  );
};
