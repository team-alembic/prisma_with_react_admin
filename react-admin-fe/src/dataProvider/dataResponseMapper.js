const dataResponseMapper = (response, type, resource, params) => {
  console.log(response);
  console.log(type, resource);
  console.log(params);

  if ('error' in response || 'code' in response) {
    throw new Error(JSON.stringify(response));
  }

  switch (type) {
    case 'GET_ONE':
      return {
        data: response[0]
      };
    case 'GET_LIST':
      return {
        data: response.data[`${resource.toLowerCase()}s`],
        total: response.data[`${resource.toLowerCase()}s`].length
      };
    case 'CREATE':
      return {
        data: response.returning[0]
      };
    default:
      return { data: response };
  }
};

export default dataResponseMapper;