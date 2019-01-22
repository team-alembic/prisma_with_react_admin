import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const AccountCreate = props => {
  return <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
};

export default AccountCreate;