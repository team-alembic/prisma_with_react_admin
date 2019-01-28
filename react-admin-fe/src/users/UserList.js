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
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="auth0Id" />
          <TextField source="email" />
          <EditButton basePath="/user" />
        </Datagrid>
      }
    />
  </List>
);

export default UserList;