import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="auth0Id" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;