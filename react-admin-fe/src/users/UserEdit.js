import React from "react";
import { SimpleForm, TextInput, Edit } from "react-admin";

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
