import React from "react";
import {
  ChipField,
  Datagrid,
  EditButton,
  List,
  ReferenceManyField,
  Responsive,
  SingleFieldList,
  TextField,
  DeleteButton
} from "react-admin";

const UserList = props => (
  <List title="All users" {...props}>
    <Responsive
      small={
        <Datagrid>
          <TextField source="id" />
          <TextField source="email" />
          <TextField source="name" />
          <EditButton />
          <DeleteButton source="/user" />
        </Datagrid>
      }
    />
  </List>
);

export default UserList;
