import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import users from "./users/";
import accounts from "./accounts";
import UserCreate from "./users/UserCreate"
import dataProvider from "./dataProvider"
import buildGraphQLProvider from 'ra-data-graphql';
import { createNetworkInterface } from 'react-apollo';
import buildPrismaProvider from "ra-data-prisma";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    dataProvider({
      clientOptions: {
        uri: 'http://localhost:4000/graphiql'
      }
    })
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
          name="User"
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default App;

