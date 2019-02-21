import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="published" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
