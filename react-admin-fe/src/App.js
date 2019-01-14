import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserCreate } from './users';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import buildPrismaProvider from 'ra-data-prisma';
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildPrismaProvider({ clientOptions: { uri: 'http://localhost:4466' } })
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin
                dataProvider={dataProvider}
                title="Prisma Admin"
            >
                <Resource
                    name="Post"
                    icon={PostIcon}
                    list={PostList}
                    edit={PostEdit}
                    create={PostCreate}
                    show={PostShow}
                />
                <Resource
                    name="User"
                    list={UserList}
                    create={UserCreate}
                    icon={UserIcon}
                />
            </Admin>
        );
    }
}

export default App;