import titleCase from 'https://deno.land/x/case@2.2.0/titleCase.ts';
import { resolve } from 'https://deno.land/std@0.206.0/path/mod.ts';
import { folder } from './constants.ts';

const items = [];

for await (const f of Deno.readDir(folder)) {
  if (!f.isDirectory) continue;
  items.push(f.name);
}

const content = items
  .map(
    (s) =>
      `<a href='/${s}/'>${titleCase(s.replaceAll('-', ' '))
        .replace(' ', '.')
        .replaceAll('Ii', 'II')
        .replaceAll('IIi', 'III')
        .replaceAll('Iv', 'IV')}</a>`
  )
  .join('\n');

await Deno.writeTextFile(
  resolve(folder, 'index.html'),
  (
    await Deno.readTextFile(resolve(folder, 'index.html'))
  ).replace(/<div id="app">.*<\/div>/s, `<div id="app">${content}</div>`)
);
