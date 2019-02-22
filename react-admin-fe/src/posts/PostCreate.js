import React from "react";
import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="title" />
        <BooleanInput label="Published" source="published" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
