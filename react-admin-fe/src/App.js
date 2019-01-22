import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildPrismaProvider from 'ra-data-prisma';
import users from "./users/";
import accounts from "./accounts";

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
                <Resource name="User" {...users} />
                <Resource name="Account" {...accounts} />
            </Admin>
        );
    }
}

export default App;

