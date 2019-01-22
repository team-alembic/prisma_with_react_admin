import React from "react";
import {
  Create,
  Datagrid,
  List,
  Responsive,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
  Show,
  Edit,
  SimpleShowLayout,
  EditButton,
} from "react-admin";

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>

      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="auth0_id" />
      <TextInput source="email" />
      <TextInput source="inserted_at" />
      <TextInput source="updated_at" />
    </SimpleForm>
  </Create>
);

export const UserList = props => (
  <List title="All users" {...props}>
    <Responsive
      small={
        <Datagrid>
          <TextField source="first_name" />
          <TextField source="last_name" />
          <TextField source="auth0_id" />
          <TextField source="email" />
          <TextField source="inserted_at" />
          <TextField source="updated_at" />
          <TextField source="id" />
          <EditButton basePath="/user" />
        </Datagrid>
      }
    />
  </List>
);

export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="auth0_id" />
      <TextField source="email" />
      <TextField source="inserted_at" />
      <TextField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.first_name}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="auth0_id" />
      <TextInput source="email" />
      <TextInput source="inserted_at" />
      <TextInput source="updated_at" />
    </SimpleForm>
  </Edit>
);


export const AccountsCreate = props => {
  return <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
};

export const AccountsList = props => {

  return <List title="All accountses" {...props}>
    <Responsive
      small={<SimpleList primaryText={record => record.name} />}
      medium={
        <Datagrid>
          <TextField source="name" />
        </Datagrid>
      }
    />
  </List>
};