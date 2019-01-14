# Prisma & react-admin

## [Prisma Server](https://www.prisma.io/docs)

* `cd prisma_server`

* Running Prisma container `docker-compose up -d`
  - PostgresSQL (configured in `docker-compose.yml`)
  - http://localhost:4466/

* Bootstrap Configure Prisma API
  - `prisma init --endpoint http://localhost:4466`

* Deploy Prisma datamodel
  - `prisma deploy`

* Add user in graphql console
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

* Update datamodel by update `datamodel.prisma` file
  * introduce model relation
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

  * Create Post
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
        "id": "cjqviwqse000a0964i1qfc8pk"
      }
    }
    
  }
}
```
  * deploy model chage by `prisma deploy`

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