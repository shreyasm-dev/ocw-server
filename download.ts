import { download } from 'https://deno.land/x/download@v2.0.2/mod.ts';
import { resolve } from 'https://deno.land/std@0.206.0/path/mod.ts';
import { folder } from './constants.ts';

const id = Deno.args[0];
const file = `${id.split('-')[0]}.${id.split('-')[1]}-${id
  .split('-')
  .slice(1)
  .slice(-2)
  .join('-')}.zip`;

await download(`https://ocw.mit.edu/courses/${id}/${file}`, {
  file: `${id}.zip`,
  dir: folder,
});

await new Deno.Command('unzip', {
  args: [resolve(folder, `${id}.zip`), '-d', resolve(folder, id)],
}).output();

await Deno.remove(resolve(folder, `${id}.zip`));
