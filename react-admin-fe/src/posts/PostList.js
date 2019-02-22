import React from "react";
import { Datagrid, List, TextField, ReferenceField } from "react-admin";

const PostList = props => {
  return (
    <List title="All accountses" {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="published" />
        <TextField source="count" />
      </Datagrid>
    </List>
  );
};

export default PostList;
