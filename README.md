# Prisma & react-admin

## Start app

* In folder `/prisma_server` run
  - `docker-compose up -d`
  - `prisma deploy`
  - seed data in `http://localhost:4466/`

```
mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    name
  }
}

{
  "data": {"name": "John"}
}
```

*Replace* id with newly created user id
```
mutation createPost($data: PostCreateInput!) {
  createPost(data: $data) {
 	title
    author {
      name
    }
    published
  }
}

// Query Variables
{
  "data": {
  	"title": "Title 1",
  	"published": true,
    "author": {
      "connect": {
        "id": "<new-user-id>"
      }
    }
    
  }
}
```

* In folder `/react-admin-fe` run

  - Run front end `npm install & npm start`

# Note

## [Prisma Server](https://www.prisma.io/docs)

* Running Prisma container `docker-compose up -d`
  - PostgresSQL (configured in `docker-compose.yml`)
  - http://localhost:4466/

* Bootstrap Configure Prisma API
  - `prisma init --endpoint http://localhost:4466`

* Deploy Prisma datamodel
  - `prisma deploy`

* Update datamodel by update `datamodel.prisma` file
  * introduce model relation e.g
```
type User {
  id: ID! @unique
  email: String @unique
  name: String!
  posts: [Post!]!
}

// Query Variables
type Post {
  id: ID! @unique
  title: String!
  published: Boolean! @default(value: "false")
  author: User
}
```

* deploy updated model by `prisma deploy`

## [react-admin-fe](https://github.com/marmelab/react-admin)

* `cd react-admin-fe`

* Add data provider lib [`ra-data-prisma`](https://www.npmjs.com/package/ra-data-prisma) with setup example

```
import buildPrismaProvider from 'ra-data-prisma';
import { UserList } from './users';

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildPrismaProvider({ client })
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
```

* Run front end `npm install & npm start`