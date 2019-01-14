import React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    BooleanField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter,
} from 'react-admin';

const PostFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput
            label="Author"
            source="author.id"
            reference="User"
            allowEmpty
        >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Author" source="author.id" reference="User">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <BooleanField source="published" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Author" source="author.id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <BooleanField source="published" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Author" source="author.id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <BooleanField source="published" />
        </SimpleForm>
    </Create>
);

export const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <BooleanField source="published" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);
