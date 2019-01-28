import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="auth0Id" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);

export default UserCreate;