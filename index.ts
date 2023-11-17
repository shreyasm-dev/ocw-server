import { titleCase } from 'https://esm.sh/title-case@4.1.2';
import { resolve } from 'https://deno.land/std@0.206.0/path/mod.ts';
import { folder, indexTemplate } from './constants.ts';

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
        .replace(
          // Handle Roman numerals
          // Taken/modified from https://stackoverflow.com/a/267405
          /\bM{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b/gi,
          (s) => s.toUpperCase()
        )}</a>`
  )
  .join('');

await Deno.writeTextFile(
  resolve(folder, 'index.html'),
  indexTemplate(content)
);
