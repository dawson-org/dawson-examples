import path from 'path';
import pug from 'pug';
const template = pug.compileFile(path.join(__dirname, 'template.pug'));

export function homepage (event) {
  return template({
    name: event.params.path.name
  });
}
homepage.api = {
  path: 'hello/{name}'
};
