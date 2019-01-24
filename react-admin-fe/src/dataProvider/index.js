import merge from 'lodash/merge';
import buildDataProvider from 'ra-data-graphql';
import gql from "graphql-tag"
import { DELETE, DELETE_MANY, UPDATE, UPDATE_MANY, GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE, CREATE } from 'react-admin';
import camelCase from 'lodash/camelCase';
import pluralize from 'pluralize'


const buildQuery = introspectionResults => (raFetchType, resourceName, params) => {
  const resource = introspectionResults.resource.find(r => r.type.name === resourceName);

  switch (raFetchType) {
    case 'CREATE':
      return {
        query: gql`query ${resource[raFetchType].name}($id: ID) {
                  data: ${resource[raFetchType].name}(id: $id) {
                    name
                  }
              }`,
        variables: params, // params = { id: ... }
        parseResponse: response => response.data,
      }
      break;
    // ... other types handled here
  }
}

const defaultOptions = {
  buildQuery,
  introspection: {
    operationNames: {
      [GET_LIST]: resource => {
        return `${pluralize(camelCase(resource.name))}`
      },
      [GET_ONE]: resource => `${camelCase(resource.name)}`,
      [GET_MANY]: resource => `${pluralize(camelCase(resource.name))}`,
      [GET_MANY_REFERENCE]: resource => `${pluralize(camelCase(resource.name))}`,
      [CREATE]: resource => `create${resource.name}`,
      [UPDATE]: resource => `update${resource.name}`,
      [DELETE]: resource => `delete${resource.name}`
    },
  }
};

export default options => {
  return buildDataProvider(merge({}, defaultOptions, options)).then(
    defaultDataProvider => {
      return (fetchType, resource, params) => {
        return defaultDataProvider(fetchType, resource, params);
      };
    }
  );
};