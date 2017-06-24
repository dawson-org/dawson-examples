import path from 'path';
import pug from 'pug';
const template = pug.compileFile(path.join(__dirname, 'template.pug'));

export function greet (event) {
  return template({
    name: event.params.path.name
  });
}
greet.api = {
  path: 'hello/{name}'
};

export function index (event) {
  return `
  It worked! Navigate to /hello/your-name :)
`;
}
index.api = {
  path: ''
};
