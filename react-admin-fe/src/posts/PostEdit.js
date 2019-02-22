import React from "react";
import { BooleanInput, SimpleForm, TextInput, TextField, Edit } from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="count" />    
      <BooleanInput label="Published" source="published" /> 
    </SimpleForm>
  </Edit>
);

export default PostEdit;
