import React from "react";
import {
  Datagrid,
  EditButton,
  List,
  Responsive,
  TextField,
} from "react-admin";

const UserList = props => (
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

export default UserList;