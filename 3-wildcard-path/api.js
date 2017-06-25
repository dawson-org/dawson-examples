

// $ curl -X GET https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/wildcardGet/xxx
// $ curl -X GET https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/wildcardGet/xxx/asd
// $ curl -X GET https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/wildcardGet/bar/123/abc
export function wildcardExample (event) {
  return `<pre>${JSON.stringify(event, null, 2)}</pre>`;
}
wildcardExample.api = {
  path: 'wildcardGet/{args1+}',
  method: 'GET'
};

// $ curl -X GET https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/anyMethod
// $ curl -X POST https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/anyMethod
// $ curl -X OPTIONS https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/anyMethod
export function anyExample (event) {
  const httpMethod = event.context.httpMethod;
  return `<pre>${httpMethod}</pre>`;
}
anyExample.api = {
  path: 'anyMethod',
  method: 'ANY'
};

// $ curl -X GET https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/widcardAny/xxx
// $ curl -X POST https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/widcardAny/xxx/asd
// $ curl -X DELETE https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/prod/widcardAny/xxx/asd
export function wildcardAnyExample (event) {
  return `<pre>${JSON.stringify(event, null, 2)}</pre>`;
}
wildcardAnyExample.api = {
  path: 'widcardAny/{args2+}',
  method: 'ANY'
};

export function index (event) {
  return `
  It worked! Navigate to /hello/your-name :)
`;
}
index.api = {
  path: ''
};
