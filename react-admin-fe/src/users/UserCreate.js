import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
