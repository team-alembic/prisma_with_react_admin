import React from "react";
import {  Datagrid, List, TextField, ReferenceField, DeleteButton, EditButton
          } from "react-admin";

const PostList = props => (
  <List title="All accountses" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="published" />
      <TextField source="count" />
      <EditButton />
      <DeleteButton source="/post" />
    </Datagrid>
  </List>
);

export default PostList;
