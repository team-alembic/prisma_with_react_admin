import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import users from "./users/";
import accounts from "./accounts";
import UserCreate from "./users/UserCreate"
import dataProvider from "./dataProvider"
import UserList from './users/UserList';

class App extends Component {
  render() {
    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin
        dataProvider={dataProvider('http://localhost:4000/graphql')}
        title="Prisma Admin"
      >
        <Resource
          name="User"
          create={UserCreate}
          list={UserList}
        />
      </Admin>
    );
  }
}

export default App;

