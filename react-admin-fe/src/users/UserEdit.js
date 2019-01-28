import React from "react";
import {
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.first_name}"` : ''}</span>;
};

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="auth0Id" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;