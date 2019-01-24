import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="auth0_id" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);

export default UserCreate;