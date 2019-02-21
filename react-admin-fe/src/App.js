import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import buildPrismaProvider from "ra-data-prisma";
import users from "./users/";
import posts from "./posts";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildPrismaProvider({
      clientOptions: { uri: "http://localhost:4466" }
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider} title="Prisma Admin">
        <Resource name="User" {...users} />
        <Resource name="Post" {...posts} />
      </Admin>
    );
  }
}

export default App;
