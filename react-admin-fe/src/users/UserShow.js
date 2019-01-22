import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const UserShow = props => (
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

export default UserShow;