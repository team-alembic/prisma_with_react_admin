import React from "react";
import { Responsive, SimpleList, List, Datagrid, TextField } from "react-admin";

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
