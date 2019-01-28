const queryDictionary = {
  User: {
    CREATE: `
      mutation ($data: UserInput!){
        createUser(userInput: $data) {
          id
          auth0Id
          email
          firstName
          lastName
        }
      }`,
    GET_LIST: `
      query {
        users {
          id
          auth0Id
          email
          firstName
          lastName
        }
      }`
  }
};

const dataRequestMapper = (type, resource, params) => {
  console.log(type, resource, params);

  switch (type) {
    case 'CREATE':
      return queryDictionary[resource][type];
    case 'GET_LIST':
      return queryDictionary[resource][type];
    default:
      throw new Error(`Unsupported type ${type}`);
  };
};

export default dataRequestMapper;