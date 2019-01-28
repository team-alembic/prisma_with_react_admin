import dataRequestMapper from "./dataRequestMapper"
import dataResponseMapper from "./dataResponseMapper"

export default (serverEndpoint) => {
  const fetch = require('graphql-fetch')(serverEndpoint)
  return (type, resource, params) => {
    const query = dataRequestMapper(type, resource, params);
    return fetch(query, params).then((data) => {
      return dataResponseMapper(data, type, resource, params);
    });
  };
};