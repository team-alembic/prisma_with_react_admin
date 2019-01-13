import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import buildPrismaProvider from 'ra-data-prisma';

// const client = new ApolloClient();

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildPrismaProvider({ clientOptions: { uri: 'http://localhost:4466' }})
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="User" list={UserList} />
            </Admin>
        );
    }
}

export default App;