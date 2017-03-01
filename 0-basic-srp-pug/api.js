import pug from 'pug';
const template = pug.compileFile(__dirname + '/template.pug');

export function homepage (event) {
  return template({
    name: event.params.path.name
  });
}
homepage.api = {
  path: ''
};
