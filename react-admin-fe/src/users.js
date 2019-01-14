import React from "react";
import {
  Create,
  Datagrid,
  List,
  Responsive,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput
} from "react-admin";

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const UserList = props => (
  <List title="All users" {...props}>
    <Responsive
      small={<SimpleList primaryText={record => record.name} />}
      medium={
        <Datagrid>
          <TextField source="name" />
        </Datagrid>
      }
    />
  </List>
);
