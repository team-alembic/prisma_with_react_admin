import React from "react";
import { SimpleForm, TextInput, Edit } from "react-admin";

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.first_name}"` : ""}</span>;
};

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="name" />
      <TextInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
