import React from "react";
import {
  Datagrid,
  List,
  Responsive,
  SimpleList,
  TextField,
} from "react-admin";

const AccountList = props => {
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

export default AccountList;