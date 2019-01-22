import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildPrismaProvider from 'ra-data-prisma';
import { UserList, UserCreate, UserEdit, UserShow, AccountsList, AccountsCreate } from './users';

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

        console.log(dataProvider)
        return (
            <Admin
                dataProvider={dataProvider}
                title="Prisma Admin"
            >
                <Resource
                    name="Account"
                    list={AccountsList}
                    create={AccountsCreate}
                />
                <Resource
                    name="User"
                    list={UserList}
                    create={UserCreate}
                    show={UserShow}
                    edit={UserEdit}
                />
            </Admin>
        );
    }
}

export default App;

