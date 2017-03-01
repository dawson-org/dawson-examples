export function time () {
  return {date: new Date().toISOString()};
}
time.api = {
  path: 'time',
  responseContentType: 'application/json'
};
